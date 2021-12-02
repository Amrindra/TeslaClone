import styled from "styled-components";
import React from "react";
import PageSection from "./PageSection";
import WhiteHeader from "./headers/WhiteHeader";
import { Helmet } from "react-helmet";

function SolarRoof() {
  return (
    <SolarRoofStyle>
      <Helmet>
        <title>Solar Roofs</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>

      <WhiteHeader />

      <PageSection
        title="Solar Roof"
        description="Transform your roof and produce clean energy"
        backgroundImg="SolarRoof_page.jpg"
        range="sun"
        rangeDesc="Beautiful Solar Without Compromise"
        speed="25-Year"
        speedDesc="Title Warranty"
        topSpeed="24/7"
        topSpeedDesc="Outage Protection"
        orderButton="ORDER NOW"
      />
    </SolarRoofStyle>
  );
}

const SolarRoofStyle = styled.div`
  overflow: hidden;

  h1,
  p {
    color: white;
  }
`;

export default SolarRoof;
