import React from 'react';
import '../styles/JumpToList.css';

const JumpToList = ({ familyData }) => {
  const scrollToList = (name, fullName) => {
    const element = document.getElementById(fullName.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jump-to-list">
      <div className="name-buttons">
        {Object.values(familyData).flatMap(family => 
          family.lists.map(member => (
            <button
              key={member.name}
              onClick={() => scrollToList(member.name, member.fullName)}
            >
              {member.name} {member.emoji}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default JumpToList;