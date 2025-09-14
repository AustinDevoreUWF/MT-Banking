import React from 'react'
import HeaderBox from '@/components/HeaderBox'
const Home = () => {
  const loggedIn={firstName:'Austin'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiantly"
                />
            </header>
        </div>
    </section>
  )
}

export default Home