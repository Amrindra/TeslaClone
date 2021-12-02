import styled from "styled-components";
import React from "react";
import PageSection from "./PageSection";
import Header from "./headers/Header";
import { Helmet } from "react-helmet";

function ModelX() {
  return (
    <ModelXStyled>
      <Helmet>
        <title>Tesla-Model X</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>

      <Header />

      <PageSection
        title="Model X"
        description="Plaid"
        backgroundImg="model-x.jpg"
        range="333 mi"
        rangeDesc="Range (EPA est.)"
        speed="2.5 s"
        speedDesc="0-60 mph"
        topSpeed="9.9 s"
        topSpeedDesc="1/4 Mile"
        peakPower="1,020 hp"
        peakPowerDesc="Peak Power"
        orderButton="ORDER NOW"
      />
    </ModelXStyled>
  );
}

const ModelXStyled = styled.div`
  overflow: hidden;
`;

export default ModelX;
