import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CardComponents({ id, title, cover, pictures }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/logement/${id}`);
    console.log({ pictures });
  };
  return (
    <Col
      key={id}
      style={{
        width: 340,
        height: 340,
        objectFit: 'cover',
        borderRadius: 10,
      }}
    >
      <Card.Img
        onClick={() => handleClick(title)}
        src={cover}
        alt="couverture"
        style={{ height: 340, borderRadius: 10, objectFit: 'cover' }}
      />
      <Card.Text
        style={{
          position: 'absolute',
          marginLeft: '1%',
          marginTop: '-2%',
          width: '10%',
          color: ' #FFFFFF',
        }}
      >
        {title}
      </Card.Text>
    </Col>
  );
}
CardComponents.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.string,
};

CardComponents.defaultProps = {
  id: '',
  title: '',
  cover: '',
  pictures: '',
};

export default CardComponents;
