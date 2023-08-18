import React, { useState } from 'react';
import vector from '../../assets/vector.png';
import vector1 from '../../assets/vector1.png';
import '../../style.css';

function SlideShow({ pictures }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="allCarousel">
      <div className="carousel-s">
        {pictures.map((picture, idx) => (
          <div
            className={`carousel-s-item ${index === idx ? '' : 'hidden-card'}`}
            key={idx}
          >
            <img
              className={`picture-${idx}`}
              src={picture}
              alt="cover"
              style={{ width: '100%', height: 415, borderRadius: 25 }}
            />
            {pictures.length === 1 ? (
              <div
                className="carousel-s-caption"
                style={{ display: 'none' }}
              ></div>
            ) : (
              <div className="carousel-s-caption">
                {idx + 1}/{pictures.length}
              </div>
            )}
          </div>
        ))}
      </div>

      <img
        className="avantIcon"
        src={vector1}
        alt="imageavant"
        onClick={() =>
          index == 0 ? setIndex(pictures.length - 1) : setIndex(index - 1)
        }
      />
      <img
        className="apresIcon"
        src={vector}
        alt="imageapres"
        onClick={() =>
          index == pictures.length - 1 ? setIndex(0) : setIndex(index + 1)
        }
      />
    </div>
  );
}
export default SlideShow;
