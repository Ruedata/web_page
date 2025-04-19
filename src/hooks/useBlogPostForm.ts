'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { db } from '@/lib/firebase-client';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { uploadImage } from '@/utils/imageUpload';

interface BlogPost {
  id?: string;
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
  locale: string;
  updatedAt?: string;
}

export function useBlogPostForm(initialSlug?: string, initialLocale: string = 'en') {
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
    locale: initialLocale,
  });
  
  useEffect(() => {
    async function fetchPostData() {
      if (initialSlug) {
        setIsEdit(true);
        
        const isDevelopmentMode = process.env.NODE_ENV === 'development';
        
        if (isDevelopmentMode) {
          console.log('Development mode: Using mock blog post data for edit');
          const mockPostData: BlogPost = {
            title: 'Test Blog Post for Deletion',
            description: 'This is a test blog post that will be deleted to verify the delete functionality',
            content: '<p>This is a test blog post content that will be deleted to verify the delete functionality works correctly.</p>',
            image: '',
            slug: 'test-blog-post', // Use consistent slug with useBlogPostsList
            locale: initialLocale,
            updatedAt: new Date().toISOString()
          };
          
          setFormValues({
            title: mockPostData.title || '',
            description: mockPostData.description || '',
            content: mockPostData.content || '',
            image: mockPostData.image || '',
            slug: 'test-blog-post', // Use consistent slug
            locale: initialLocale,
          });
          return;
        }
        
        try {
          const postsRef = collection(db, 'blog_posts');
          const querySnapshot = await getDoc(doc(postsRef, `${initialLocale}_${initialSlug}`));
          
          if (querySnapshot.exists()) {
            const postData = querySnapshot.data() as BlogPost;
            setFormValues({
              title: postData.title || '',
              description: postData.description || '',
              content: postData.content || '',
              image: postData.image || '',
              slug: initialSlug,
              locale: initialLocale,
            });
            
            if (postData.image) {
              setImagePreview(postData.image);
            }
          } else {
            console.error('Blog post not found');
            toast({
              title: 'Error',
              description: 'Blog post not found',
              variant: 'destructive',
            });
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
  }, [initialSlug, initialLocale]);
  
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
      const isDevelopmentMode = process.env.NODE_ENV === 'development';
      
      if (isDevelopmentMode) {
        console.log('Development mode: Simulating blog post save');
        const mockPostId = 'test-post-id';
        console.log('Mock post ID for development mode:', mockPostId);
        
        setTimeout(() => {
          toast({
            title: 'Success',
            description: isEdit ? 'Blog post updated successfully' : 'Blog post created successfully',
          });
          router.push('../../');
        }, 500);
        return;
      }
      
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
  
  return {
    formValues,
    isSubmitting,
    imagePreview,
    isEdit,
    handleChange,
    handleImageChange,
    handleSubmit
  };
}
