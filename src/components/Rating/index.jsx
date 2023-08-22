import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../../style.css';

function Rating({ initialTag }) {
  const [rating, setRating] = useState(initialTag);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <button
            type="button"
            key={starIndex}
            className={starIndex <= rating ? 'on' : 'off'}
            onClick={() => setRating(starIndex)}
            aria-label={`${starIndex} star${starIndex === 1 ? '' : 's'}`}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

// Define prop types
Rating.propTypes = {
  initialTag: PropTypes.number.isRequired,
};

export default Rating;
