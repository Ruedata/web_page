'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '@/lib/firebase-client';

const MOCK_USER = {
  uid: 'dev-user-123',
  email: 'admin@example.com',
  displayName: 'Admin User',
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: '',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => 'mock-token',
  getIdTokenResult: async () => ({ token: 'mock-token', claims: {}, expirationTime: '', authTime: '', issuedAtTime: '', signInProvider: null, signInSecondFactor: null }),
  reload: async () => {},
  toJSON: () => ({}),
  phoneNumber: null,
  photoURL: null,
  providerId: 'password',
};

const isDevelopmentMode = process.env.NODE_ENV === 'development' && 
  (process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'AIzaSyDummyKeyForDevelopment123456');

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDevelopmentMode) {
      setCurrentUser(MOCK_USER as unknown as User);
      setLoading(false);
      return () => {};
    } else {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }
  }, []);

  async function login(email: string, password: string) {
    if (isDevelopmentMode) {
      console.log('Development mode: Bypassing Firebase authentication');
      setCurrentUser(MOCK_USER as unknown as User);
      return;
    }
    
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    if (isDevelopmentMode) {
      console.log('Development mode: Bypassing Firebase logout');
      setCurrentUser(null);
      return;
    }
    
    await firebaseSignOut(auth);
  }

  const value = {
    currentUser,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
