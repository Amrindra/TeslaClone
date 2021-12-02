import styled from "styled-components";
import React from "react";

import Fade from "react-reveal/Fade";

function PageSection({
  title,
  description,
  backgroundImg,
  range,
  rangeDesc,
  speed,
  speedDesc,
  topSpeed,
  topSpeedDesc,
  peakPower,
  peakPowerDesc,
  orderButton
}) {
  return (
    <PageSectionStyled bgImage={backgroundImg}>
      {/* <WhiteHeader /> */}
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <div>
              <h3>{range}</h3>
              <p>{rangeDesc}</p>
            </div>{" "}
            <div>
              <h3>{speed}</h3>
              <p>{speedDesc}</p>
            </div>
            <div>
              <h3>{topSpeed}</h3>
              <p>{topSpeedDesc}</p>
            </div>{" "}
            <div>
              <h3>{peakPower}</h3>
              <p>{peakPowerDesc}</p>
            </div>
            <OrderButton>{orderButton}</OrderButton>
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </PageSectionStyled>
  );
}

const PageSectionStyled = styled.div`
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /*for aligning vertically*/
  align-items: center; /* for aligning horizontally */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  h3 {
    padding: 0 1.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 540;
  }

  p {
    padding-top: 0.4rem;
    color: white;
    font-size: 0.7rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OrderButton = styled.div`
  /* background-color: rgb(23, 26, 32, 0.8); */
  width: 150px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 2px solid white;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background-color: white;
    color: grey;
  }
`;

const DownArrow = styled.img`
  /* margin-top: 20px; */
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

export default PageSection;
