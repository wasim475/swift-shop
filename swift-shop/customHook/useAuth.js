'use client';
import { useRouter, usePathname } from 'next/navigation'; // Next.js 13+ এর জন্য usePathname
import { useEffect } from 'react';
import { getUserToken } from '../utility';
import toast from 'react-hot-toast';

const useAuth = () => {
  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    const checkAuth = async () => {
      const token = getUserToken();
      
      if (!token) {
        localStorage.removeItem('user')
        if (pathname !== '/login') {
          toast.error('You must be logged in!');
          router.push('/login'); 
        }
        return;
      }

      try {
        const res = await fetch('https://swift-shop-backend.vercel.app/api/v1/auth/verify-token', { 
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!res.ok) {
          if (pathname !== '/login') {
            toast.error('Session expired, please login again!');
            router.push('/login');
          }
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        if (pathname !== '/login') {
          router.push('/login');
        }
      }
    };

    checkAuth();  
  }, [router, pathname]);
};

export default useAuth;
