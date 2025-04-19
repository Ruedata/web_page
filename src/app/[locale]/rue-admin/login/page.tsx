import LoginForm from '@/components/Admin/LoginForm';
import { AuthProvider } from '@/contexts/AuthContext';

export default function AdminLoginPage() {
  return (
    <div className="container max-w-md mx-auto py-12">
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  );
}
