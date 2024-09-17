import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '@/components/nav/navbar';

const SettingsLayout = ({ children }) => {
  const router = useRouter();

  const isActive = (path) => router.pathname === `/settings/${path}`;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow bg-black text-white min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <nav className="flex space-x-4 mb-6">
            <Link href="/settings/account">
              <span className={`cursor-pointer ${isActive('account') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Account
              </span>
            </Link>
            <Link href="/settings/team">
              <span className={`cursor-pointer ${isActive('team') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Team
              </span>
            </Link>
            <Link href="/settings/billing">
              <span className={`cursor-pointer ${isActive('billing') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Billing
              </span>
            </Link>
            <Link href="/settings/pricing">
              <span className={`cursor-pointer ${isActive('pricing') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Pricing
              </span>
            </Link>
            <Link href="/settings/referral">
              <span className={`cursor-pointer ${isActive('referral') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Referral
              </span>
            </Link>
            <Link href="/settings/statistics-api">
              <span className={`cursor-pointer ${isActive('statistics-api') ? 'text-green-500 border-b-2 border-green-500 pb-2' : 'text-gray-400'}`}>
                Statistics API
              </span>
            </Link>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;