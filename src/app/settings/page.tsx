
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SettingsIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/settings/account');
  }, [router]);

  return null;
};

export default SettingsIndex;

