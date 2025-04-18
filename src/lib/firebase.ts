import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let _db: Firestore | null = null;

function getDb(): Firestore {
  if (_db) return _db;
  
  try {
    const firebaseConfig = {
      type: process.env.WEB_PAGE_TYPE || 'service_account',
      project_id: process.env.WEB_PAGE_PROJECT_ID || 'demo-project',
      private_key_id: process.env.WEB_PAGE_PRIVATE_KEY_ID || 'demo-key-id',
      private_key: (process.env.WEB_PAGE_PRIVATE_KEY || 'demo-key').replace(/\\n/g, '\n'),
      client_email: process.env.WEB_PAGE_CLIENT_EMAIL || 'demo@example.com',
      client_id: process.env.WEB_PAGE_CLIENT_ID || 'demo-client-id',
      auth_uri: process.env.WEB_PAGE_AUTH_URI || 'https://accounts.google.com/o/oauth2/auth',
      token_uri: process.env.WEB_PAGE_TOKEN_URI || 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: process.env.WEB_PAGE_AUTH_PROVIDER_X509_CERT_URL || 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.WEB_PAGE_CLIENT_X509_CERT_URL || 'https://www.googleapis.com/robot/v1/metadata/x509/demo',
      universe_domain: process.env.WEB_PAGE_UNIVERSE_DOMAIN || 'googleapis.com'
    };
    
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(firebaseConfig as any)
      });
    }
    
    _db = getFirestore();
    return _db;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    
    return getMockFirestore();
  }
}

function getMockFirestore(): Firestore {
  const mockDb = {
    collection: (name: string) => ({
      doc: (id?: string) => ({
        set: async (data: any) => Promise.resolve(),
        get: async () => ({
          exists: true,
          data: () => ({ title: "Mock Post", image: "/placeholder.svg", content: "Mock content", description: "Mock description" })
        })
      }),
      where: (field: string, op: string, value: any) => ({
        where: (field2: string, op2: string, value2: any) => ({
          get: async () => {
            if (name === 'blog_posts' && field === 'slug' && value === 'data-driven-tire-management') {
              return {
                empty: false,
                docs: [
                  {
                    data: () => ({
                      title: `Data-Driven Tire Management: How AI is Transforming Fleet Operations (${field2 === 'locale' ? value2 : 'en'})`,
                      image: '/images/fleet_manager.jpg',
                      description: 'Discover how artificial intelligence is revolutionizing tire management for commercial fleets, leading to significant cost savings and improved safety.',
                      content: `
                        <p class="lead">Discover how artificial intelligence is revolutionizing tire management for commercial fleets, leading to significant cost savings and improved safety.</p>
                        <p>In the competitive world of fleet management, every operational efficiency counts. Tire management, often overlooked, represents a significant portion of operational costs for commercial fleets.</p>
                        <h2>The Evolution of Tire Management</h2>
                        <p>Historically, fleet managers have relied on general guidelines provided by tire manufacturers. These recommendations, while useful as a baseline, don't account for the myriad of variables that affect tire wear in real-world conditions.</p>
                      `
                    })
                  }
                ]
              };
            }
            return { empty: true, docs: [] };
          }
        })
      }),
      batch: () => ({
        set: (docRef: any, data: any) => {},
        commit: async () => Promise.resolve()
      })
    })
  } as unknown as Firestore;
  
  return mockDb;
}

export const db = getDb();

export interface BlogPost {
  title: string;
  image: string;
  content: string;
  description: string;
}

export async function getBlogPostBySlug(slug: string, locale: string): Promise<BlogPost | null> {
  try {
    const postRef = db.collection('blog_posts')
      .where('slug', '==', slug)
      .where('locale', '==', locale);
    
    const snapshot = await postRef.get();
    
    if (snapshot.empty) {
      return null;
    }
    
    const postData = snapshot.docs[0].data() as BlogPost;
    return postData;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
