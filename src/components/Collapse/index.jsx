import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from '../../assets/arrow_back.png';
import '../../style.css';

const StyledImg = styled.img`
transform: ${({ transform }) => transform};
`;
const CollapsibleContent = styled.div`
display: ${({ display }) => display};
`;
function Collapse({ title, description }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="dropDown">
      <button
        className="button-title"
        onClick={handleClick}
        type="button"
        aria-expanded={isClicked ? 'true' : 'false'}
      >
        <div className="title-button">
          <h1>{title}</h1>
          <StyledImg
            onClick={handleClick}
            transform={isClicked ? 'rotate(0deg)' : 'rotate(180deg)'}
            className="iconOpen"
            src={icon}
            alt="open"
            aria-label={isClicked ? 'Collapse' : 'Expand'}
          />
        </div>
      </button>
      <CollapsibleContent display={isClicked ? 'block' : 'none'}>
        <div className="contenuShow">
          <div className="contenuShow-text">{description}</div>
        </div>
      </CollapsibleContent>
    </div>
  );
}
// Prop validation
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};
Collapse.defaultProps = {
  description: '',
};

export default Collapse;
