import React from 'react';
import './App.css';
import './styles/Christmas.css';
import WishListCard from './components/WishListCard';
import JumpToList from './components/JumpToList';
import ScrollToTop from './components/ScrollToTop';
import Snow from './components/Snow';
import Countdown from './components/Countdown';
import { familyData } from './data/familyData';
import SantaSleigh from './components/SantaSleigh';

function App() {
  return (
    <div className="App">
      <Snow />
      <SantaSleigh />
      <div className="twinkle" style={{ top: '10%', left: '20%' }}></div>
      <div className="twinkle" style={{ top: '30%', left: '80%' }}></div>
      <div className="twinkle" style={{ top: '70%', left: '15%' }}></div>
      <div className="twinkle" style={{ top: '50%', left: '90%' }}></div>
      <header className="App-header floating">
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
      <div className="christmas-star-bottom">⭐</div>
      <ScrollToTop />
    </div>
  );
}

export default App;