import { AuthProvider } from '@/contexts/AuthContext';
import BlogPostForm from '@/components/Admin/BlogPostForm';

export default function NewBlogPostPage({ params }: { params: { locale: string } }) {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <AuthProvider>
        <BlogPostForm locale={params.locale} />
      </AuthProvider>
    </div>
  );
}
