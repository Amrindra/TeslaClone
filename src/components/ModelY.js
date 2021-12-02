import styled from "styled-components";
import React from "react";
import PageSection from "./PageSection";
import Header from "./headers/Header";
import { Helmet } from "react-helmet";

function ModelY() {
  return (
    <ModelYStyled>
      <Helmet>
        <title>Tesla-Model Y</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>

      <Header />

      <PageSection
        title="Model Y"
        backgroundImg="model-y.jpg"
        range="330 mi"
        rangeDesc="Range (EPA est.)"
        speed="76 cu ft"
        speedDesc="Cargo Space"
        peakPower="AWD"
        peakPowerDesc="Dual Motor"
        orderButton="ORDER NOW"
      />
    </ModelYStyled>
  );
}

const ModelYStyled = styled.div`
  overflow: hidden;
`;

export default ModelY;
