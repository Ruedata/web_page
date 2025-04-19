import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let _db: Firestore | null = null;

function getDb(): Firestore {
  if (_db) return _db;
  
  const firebaseConfig = {
    type: process.env.WEB_PAGE_TYPE || 'service_account',
    project_id: process.env.WEB_PAGE_PROJECT_ID || 'ruedata-webpage',
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
  
  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(firebaseConfig as any)
      });
    }
    
    _db = getFirestore();
    return _db;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    console.log('Firebase Config:', JSON.stringify({...firebaseConfig, private_key: '[REDACTED]'}));
    throw error; // Throw error instead of using mock to ensure we see real errors
  }
}



export const db = getDb();

export interface BlogPost {
  title: string;
  image: string;
  content: string;
  description: string;
  slug: string;
  locale: string;
  updatedAt?: string;
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
