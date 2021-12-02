import React from "react";
import styled from "styled-components";
import Section from "./Section";
import sectionData from "../array/sectionData";
import Header from "./headers/Header";

export default function Home() {
  return (
    <Container>
      <Header />

      {sectionData.map((item, index) => {
        return (
          <Section
            key={index}
            title={item.title}
            description={item.description}
            backgroundImg={item.backgroundImg}
            leftBtnText={item.leftBtnText}
            rightBtnText={item.rightBtnText}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
