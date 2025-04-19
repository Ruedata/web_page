'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
// import { useTranslations } from 'next-intl';
import { uploadImage } from '@/utils/imageUpload';
import Image from 'next/image';
import { db } from '@/lib/firebase-client';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { BlogPost } from '@/lib/firebase';

interface BlogPostFormProps {
  slug?: string;
  locale: string;
}

export default function BlogPostForm({ slug, locale }: BlogPostFormProps) {
  // const t = useTranslations(); // Uncomment when translations are needed
  const router = useRouter();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    slug: '',
    locale: locale,
  });
  
  useEffect(() => {
    async function fetchPostData() {
      if (slug) {
        setIsEdit(true);
        try {
          const postsRef = collection(db, 'blog_posts');
          const querySnapshot = await getDoc(doc(postsRef, `${locale}_${slug}`));
          
          if (querySnapshot.exists()) {
            const postData = querySnapshot.data() as BlogPost;
            setFormValues({
              title: postData.title || '',
              description: postData.description || '',
              content: postData.content || '',
              image: postData.image || '',
              slug: slug,
              locale: locale,
            });
            
            if (postData.image) {
              setImagePreview(postData.image);
            }
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          toast({
            title: 'Error',
            description: 'Failed to load blog post data',
            variant: 'destructive',
          });
        }
      }
    }
    
    fetchPostData();
  }, [slug, locale]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let imageUrl = formValues.image;
      
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, 'blog-images');
      }
      
      let postSlug = formValues.slug;
      if (!postSlug) {
        postSlug = formValues.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
      }
      
      const postData = {
        title: formValues.title,
        description: formValues.description,
        content: formValues.content,
        image: imageUrl,
        slug: postSlug,
        locale: formValues.locale,
        updatedAt: new Date().toISOString(),
      };
      
      const postRef = doc(db, 'blog_posts', `${formValues.locale}_${postSlug}`);
      await setDoc(postRef, postData);
      
      toast({
        title: 'Success',
        description: isEdit ? 'Blog post updated successfully' : 'Blog post created successfully',
      });
      
      router.push('../../');
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to save blog post',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              required
              placeholder="Post title"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL path)</Label>
            <Input
              id="slug"
              name="slug"
              value={formValues.slug}
              onChange={handleChange}
              placeholder="post-url-slug (leave empty to generate from title)"
              disabled={isEdit}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="locale">Language</Label>
            <Input
              id="locale"
              name="locale"
              value={formValues.locale}
              onChange={handleChange}
              required
              placeholder="en, es, pt"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              required
              placeholder="A brief description of the post"
              rows={2}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content (HTML)</Label>
            <Textarea
              id="content"
              name="content"
              value={formValues.content}
              onChange={handleChange}
              required
              placeholder="<p>Your blog post content here...</p>"
              rows={10}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2 relative aspect-video w-full max-w-md overflow-hidden rounded-lg">
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  fill 
                  className="object-cover" 
                />
              </div>
            )}
          </div>
          
          <div className="pt-4 flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('../../')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (isEdit ? 'Updating...' : 'Creating...') 
                : (isEdit ? 'Update Post' : 'Create Post')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
