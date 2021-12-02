import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>

            {/* if there is no right button so don't have to show, but if it does show it */}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between; /*for aligning vertically*/
  align-items: center; /* for aligning horizontally */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  /* @media (max-width: 675px) {
  
  } */
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  p {
    padding-top: 1rem;
  }

  a {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  /* margin-top: 20px; */
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
