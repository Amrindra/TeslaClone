import styled from "styled-components";
import React from "react";
import PageSection from "./PageSection";
// import { Link } from "react-router-dom";
import Header from "./headers/Header";
import { Helmet } from "react-helmet";

function ModelS() {
  return (
    <ModelSStyled>
      <Helmet>
        <title>Tesla-Model S</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>

      <Header />

      <PageSection
        title="Model S"
        description="Plaid"
        backgroundImg="model-s.jpg"
        range="396 mi"
        rangeDesc="Range (EPA est.)"
        speed="1.99 s"
        speedDesc="0-60 mph"
        topSpeed="200 mph"
        topSpeedDesc="Top Speed"
        peakPower="1,020 hp"
        peakPowerDesc="Peak Power"
        orderButton="ORDER NOW"
      />
    </ModelSStyled>
  );
}

const ModelSStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default ModelS;
