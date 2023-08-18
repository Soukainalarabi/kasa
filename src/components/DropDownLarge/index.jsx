import React, { useState } from 'react';
import '../../style.css';
import styled from 'styled-components';
import icon from '../../assets/arrow_back.png';
import { useLocation } from 'react-router-dom';
import '../../style.css';

const StyledImg = styled.img`
  transform: ${(props) =>
    props.isClicked ? 'rotate(0deg)' : 'rotate(180deg)'};
`;
const StyledDiv = styled.div`
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
`;

function DropDownLarge({ title, description }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="dropDown">
      <button className="button-title">
        <div className="title-button">
          <h1>{title}</h1>
          <StyledImg
            onClick={handleClick}
            isClicked={isClicked}
            className="iconOpen"
            src={icon}
            alt="open"
          />
        </div>
      </button>
      <StyledDiv onClick={handleClick} isClicked={isClicked}>
        <div className="contenuShow">
          <p>{description}</p>
        </div>
      </StyledDiv>
    </div>
  );
}

export default DropDownLarge;
