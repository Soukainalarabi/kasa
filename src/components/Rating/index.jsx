import React, { useState } from 'react';
import '../../style.css';

function Rating({ initialTag }) {
  const [rating, setRating] = useState(initialTag);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? 'on' : 'off'}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
export default Rating;
