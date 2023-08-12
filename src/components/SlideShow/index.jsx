import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../style.css';

function SlideShow({ pictures }) {
  console.log(pictures.length);
  return (
    <Carousel slide={false}>
      {pictures.map((picture, index) => (
        <Carousel.Item>
          <img
            src={picture}
            style={{ width: '100%', height: 415, borderRadius: 25 }}
          />
          <Carousel.Caption>
            <p>
              {index + 1}/{pictures.length}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default SlideShow;
