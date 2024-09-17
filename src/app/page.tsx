import React from 'react';
import Navbar from '@/components/nav/navbar';
import PersonalTeam from '@/pages/personal_team';
import DRPCDashboard from '@/pages/dashboard';
const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar />
      <DRPCDashboard />
      {/* <PersonalTeam/> */}
    </div>
  );
};

export default Home;
