import { AuthProvider } from '@/contexts/AuthContext';
import BlogPostsList from '@/components/Admin/BlogPostsList';

export default async function AdminDashboardPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';
  
  return (
    <AuthProvider>
      <BlogPostsList locale={locale} />
    </AuthProvider>
  );
}
