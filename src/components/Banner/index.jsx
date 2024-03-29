import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Banner({ imageCover }) {
  const location = useLocation();
  return (
    <Card className="banner" style={{ border: 'none', color: 'white' }}>
      <Card.Img
        src={imageCover}
        alt="cover"
        style={{ filter: 'brightness(0.5)', borderRadius: 25, height: 223 }}
      />

      <Card.ImgOverlay>
        <Card.Title
          className={`fs-1 ${
            location.pathname === '/' ? 'accueil' : 'apropos'
          }`}
          style={{ textAlign: 'center', paddingTop: 72 }}
        >
          Chez vous, partout et ailleurs
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
Banner.propTypes = {
  imageCover: PropTypes.string.isRequired,
};
export default Banner;
