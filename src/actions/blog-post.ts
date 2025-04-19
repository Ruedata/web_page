'use server';

import { db } from '@/lib/firebase';
import { BlogPost } from '@/lib/firebase';

export async function saveBlogPost(postData: BlogPost) {
  try {
    const { slug, locale } = postData;
    const docId = `${locale}_${slug}`;
    
    if (!postData.updatedAt) {
      postData.updatedAt = new Date().toISOString();
    }
    
    await db.collection('blog_posts').doc(docId).set(postData);
    
    return { success: true };
  } catch (error) {
    console.error('Error saving blog post:', error);
    return { 
      success: false, 
      error: 'Failed to save blog post' 
    };
  }
}

export async function deleteBlogPost(slug: string, locale: string) {
  try {
    const docId = `${locale}_${slug}`;
    await db.collection('blog_posts').doc(docId).delete();
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { 
      success: false, 
      error: 'Failed to delete blog post' 
    };
  }
}

export async function getAllBlogPosts(locale: string) {
  try {
    const snapshot = await db.collection('blog_posts')
      .where('locale', '==', locale)
      .get();
    
    if (snapshot.empty) {
      return { success: true, posts: [] };
    }
    
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return { success: true, posts };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { 
      success: false, 
      error: 'Failed to fetch blog posts',
      posts: [] 
    };
  }
}
