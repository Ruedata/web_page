'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
// import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useBlogPostForm } from '@/hooks/useBlogPostForm';

interface BlogPostFormProps {
  slug?: string;
  locale: string;
}

export default function BlogPostForm({ slug, locale }: BlogPostFormProps) {
  // const t = useTranslations(); // Uncomment when translations are needed
  
  const {
    formValues,
    isSubmitting,
    imagePreview,
    isEdit,
    handleChange,
    handleImageChange,
    handleSubmit
  } = useBlogPostForm(slug, locale);
  
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
              onClick={() => window.location.href = '../../'}
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
