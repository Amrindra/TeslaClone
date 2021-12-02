import styled from "styled-components";
import React from "react";
import PageSection from "./PageSection";
import Header from "./headers/Header";
import { Helmet } from "react-helmet";

function SolarPanels() {
  return (
    <SolarPanelsStyled>
      <Helmet>
        <title>Solar Panels</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>

      <Header />
      <PageSection
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panels.jpg"
        range="sun"
        rangeDesc="Convert Sunlight to Energy"
        speed="$"
        speedDesc="Guaranteed Lowest Price for Solar"
        topSpeed="24/7"
        topSpeedDesc="Energy
        Monitoring"
        orderButton="ORDER NOW"
      />
    </SolarPanelsStyled>
  );
}

const SolarPanelsStyled = styled.div`
  overflow: hidden;
`;

export default SolarPanels;
