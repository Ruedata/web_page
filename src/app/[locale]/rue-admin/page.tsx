import { AuthProvider } from '@/contexts/AuthContext';
import BlogPostsList from '@/components/Admin/BlogPostsList';

export default function AdminDashboardPage({ params }: { params: { locale: string } }) {
  return (
    <AuthProvider>
      <BlogPostsList locale={params.locale} />
    </AuthProvider>
  );
}
