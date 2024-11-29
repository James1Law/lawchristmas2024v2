import React from 'react';
import './App.css';
import WishListCard from './components/WishListCard';
import JumpToList from './components/JumpToList';
import ScrollToTop from './components/ScrollToTop';
import Snow from './components/Snow';
import Countdown from './components/Countdown';
import { familyData } from './data/familyData';

function App() {
  return (
    <div className="App">
      <Snow />
      <header className="App-header">
        <h1>Law Family Christmas 2024</h1>
        <Countdown />
      </header>
      <JumpToList familyData={familyData} />
      <div className="wishlists-container">
        {Object.entries(familyData).map(([key, family]) => (
          <div key={key} className="family-section">
            <h2 className="family-title">{family.label}</h2>
            {family.lists.map((member) => (
              <WishListCard
                key={member.name}
                name={member.name}
                fullName={member.fullName}  
                emoji={member.emoji}
                items={member.items}
                type={member.type}
              />
            ))}
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;