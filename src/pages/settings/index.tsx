import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SettingsIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/settings/account');
  }, [router]);

  return null;
};

export default SettingsIndex;