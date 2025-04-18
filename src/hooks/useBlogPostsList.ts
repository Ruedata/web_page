'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase-client';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  locale: string;
  updatedAt?: string;
}

export function useBlogPostsList(initialLocale: string) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocale, setSelectedLocale] = useState(initialLocale);
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetchPosts(selectedLocale);
  }, [selectedLocale]);

  const fetchPosts = async (localeFilter: string) => {
    setLoading(true);
    try {
      const postsRef = collection(db, 'blog_posts');
      const q = query(postsRef, where('locale', '==', localeFilter));
      const querySnapshot = await getDocs(q);
      
      const postsList: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        postsList.push({
          id: doc.id,
          ...doc.data() as Omit<BlogPost, 'id'>
        });
      });
      
      postsList.sort((a, b) => {
        if (a.updatedAt && b.updatedAt) {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        }
        return 0;
      });
      
      setPosts(postsList);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Error',
        description: 'Failed to load blog posts',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'blog_posts', postId));
        toast({
          title: 'Success',
          description: 'Blog post deleted successfully',
        });
        fetchPosts(selectedLocale);
      } catch (error) {
        console.error('Error deleting post:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete blog post',
          variant: 'destructive',
        });
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      document.cookie = 'admin_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      router.push('./rue-admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    posts,
    loading,
    selectedLocale,
    setSelectedLocale,
    handleDeletePost,
    handleLogout
  };
}
