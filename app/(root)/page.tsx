import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: "Binayak", lastName: "Mukherjee", email: "email@example.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your accout efficiently"
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.83}
          />
        </header>

        {/* TODO */}
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.59}, {currentBalance: 500}]}
      />
    </section>
  )
}

export default Home