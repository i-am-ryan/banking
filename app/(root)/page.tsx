import HeaderBox from '@/components/ui/HeaderBox';
import React from 'react';
import "../globals.css";
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'Ryan'};

  return (
    
      
    <section className="home bg-gray-50 min-h-screen px-4 py-6">
  <div className="max-w-6xl mx-auto space-y-8">
    <HeaderBox
      type="greeting"
      title="Welcome"
      user={loggedIn?.firstName || "Guest"}
      subtext="Access and manage your account and transactions efficiently."
    />

    <TotalBalanceBox 
      accounts={[]} 
      totalBanks={1} 
      totalCurrentBalance={1250.35} 
    />
  </div>
</section>

      
  );
}

export default Home;