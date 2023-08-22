import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from '../../assets/arrow_back.png';
import '../../style.css';

const StyledImg = styled.img`
  transform: ${(props) => (props.isClicked ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
const CollapsibleContent = styled.div`
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
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
            isClicked={isClicked}
            className="iconOpen"
            src={icon}
            alt="open"
            aria-label={isClicked ? 'Collapse' : 'Expand'}
          />
        </div>
      </button>
      <CollapsibleContent isClicked={isClicked}>
        <div className="contenuShow">
          <p>{description}</p>
        </div>
      </CollapsibleContent>
    </div>
  );
}
// Prop validation
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Collapse;
