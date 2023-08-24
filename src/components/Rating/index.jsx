import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../../style.css';

function Rating({ initialRating }) {
  const [rating, setRating] = useState(initialRating);

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
  initialRating: PropTypes.string.isRequired,
};

export default Rating;
