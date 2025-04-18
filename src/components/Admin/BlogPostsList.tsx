'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Pencil, Trash2, Plus, LogOut } from 'lucide-react';
import { useBlogPostsList } from '@/hooks/useBlogPostsList';

export default function BlogPostsList({ locale }: { locale: string }) {
  const {
    posts,
    loading,
    selectedLocale,
    setSelectedLocale,
    handleDeletePost,
    handleLogout
  } = useBlogPostsList(locale);

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
                        onClick={() => handleDeletePost(post.id)}
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
