import React from 'react';
import '../styles/WishListCard.css';
import { listTypes } from '../data/familyData';

const WishListCard = ({ name, emoji, items, type, fullName }) => {
  const cardClassName = listTypes[type]?.className || 'wishlist-card';
  
  return (
    <div className={cardClassName} id={fullName.toLowerCase().replace(' ', '-')}>
      <h2>
        {name}'s List {emoji}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                {item.text}{' '}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    - View on {item.site}
                  </a>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishListCard;