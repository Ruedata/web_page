'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase-client';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2, Plus, LogOut } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  locale: string;
  updatedAt?: string;
}

export default function BlogPostsList({ locale }: { locale: string }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocale, setSelectedLocale] = useState(locale);
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

  const handleDeletePost = async (postId: string, slug: string) => {
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

  return (
    <div className="container max-w-6xl mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts Management</h1>
        <div className="flex space-x-2">
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
          <Link href="./rue-admin/new">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              New Post
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex space-x-2">
          <Button 
            variant={selectedLocale === 'en' ? 'default' : 'outline'}
            onClick={() => setSelectedLocale('en')}
          >
            English
          </Button>
          <Button 
            variant={selectedLocale === 'es' ? 'default' : 'outline'}
            onClick={() => setSelectedLocale('es')}
          >
            Spanish
          </Button>
          <Button 
            variant={selectedLocale === 'pt' ? 'default' : 'outline'}
            onClick={() => setSelectedLocale('pt')}
          >
            Portuguese
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No blog posts found for this language.</p>
          <Link href="./rue-admin/new">
            <Button className="mt-4">Create your first post</Button>
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 truncate max-w-xs">{post.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {post.updatedAt 
                        ? new Date(post.updatedAt).toLocaleDateString() 
                        : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`./rue-admin/edit/${post.slug}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Pencil size={14} />
                          Edit
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 hover:bg-red-50"
                        onClick={() => handleDeletePost(post.id, post.slug)}
                      >
                        <Trash2 size={14} />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
