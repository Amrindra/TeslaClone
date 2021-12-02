import styled from "styled-components";
import React from "react";
import WhiteHeader from "./headers/WhiteHeader";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

function Model3() {
  return (
    <Model3Styled>
      <Helmet>
        <title>Tesla-Model 3</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>
      <WhiteHeader />
      <Fade bottom>
        <ItemText>
          <h1>Model 3</h1>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <div>
              <h3>3.1 s</h3>
              <p>0-60 mph*</p>
            </div>{" "}
            <div>
              <h3>358 mi</h3>
              <p>Range (EPA est.)</p>
            </div>{" "}
            <div>
              <h3>AWD</h3>
              <p>Dual Motor</p>
            </div>
            <OrderButton>Order Now</OrderButton>
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Model3Styled>
  );
}

const Model3Styled = styled.div`
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
  background-image: url("images/model3.jpg");
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    color: white;
  }

  a {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  h3 {
    padding: 0 1.5rem;
    color: white;
    font-size: 1.5rem;
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

export default Model3;
