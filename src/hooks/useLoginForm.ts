'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';
import Cookies from 'js-cookie';

export function useLoginForm() {
  const { login, currentUser } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (currentUser) {
      Cookies.set('admin_session', 'true', { 
        expires: 1,  // 1 day
        path: '/' 
      });
      router.push('../');
    }
  }, [currentUser, router]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      
      Cookies.set('admin_session', 'true', { 
        expires: 1,  // 1 day
        path: '/' 
      });
      
      toast({
        title: 'Success',
        description: 'You are now logged in',
      });
      
      router.push('../');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
      toast({
        title: 'Error',
        description: 'Failed to login. Please check your credentials.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit
  };
}
