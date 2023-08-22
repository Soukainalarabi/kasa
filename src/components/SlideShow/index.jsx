import React, { useState } from 'react';
import PropTypes from 'prop-types';
import vector from '../../assets/vector.png';
import vector1 from '../../assets/vector1.png';
import '../../style.css';

function SlideShow({ pictures }) {
  const [index, setIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = index === 0 ? pictures.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = index === pictures.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="allCarousel">
      <div className="carousel-s">
        {pictures.map((picture, idx) => (
          <div
            className={`carousel-s-item ${index === idx ? '' : 'hidden-card'}`}
          >
            <img
              className={`picture-${idx}`}
              src={picture}
              alt="cover"
              style={{ width: '100%', height: 415, borderRadius: 25 }}
            />
            {pictures.length > 1 && (
              <div className="carousel-s-caption">
                {idx + 1}
                /
                {pictures.length}
              </div>
            )}
          </div>
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <button
            className="avantIcon"
            onClick={goToPreviousSlide}
            type="button"
          >
            <img src={vector1} alt="imageavant" />
          </button>
          <button className="apresIcon" onClick={goToNextSlide} type="button">
            <img src={vector} alt="imageapres" />
          </button>
        </>
      )}
    </div>
  );
}

// Add prop validation
SlideShow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideShow;
