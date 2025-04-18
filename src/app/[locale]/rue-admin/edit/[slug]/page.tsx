import { AuthProvider } from '@/contexts/AuthContext';
import BlogPostForm from '@/components/Admin/BlogPostForm';

export default function EditBlogPostPage({ params }: { params: { locale: string, slug: string } }) {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <AuthProvider>
        <BlogPostForm slug={params.slug} locale={params.locale} />
      </AuthProvider>
    </div>
  );
}
