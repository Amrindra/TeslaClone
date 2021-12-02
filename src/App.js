import React from "react";
import "./styles.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ModelS from "./components/ModelS";
import Model3 from "./components/Model3";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import SolarPanels from "./components/SolarPanels";
import SolarRoof from "./components/SolarRoof";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tesla</title>
        <meta name="description" content="Order Tesla today" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="models" element={<ModelS />} />
        <Route path="model3" element={<Model3 />} />
        <Route path="modelx" element={<ModelX />} />
        <Route path="modely" element={<ModelY />} />
        <Route path="solarpanels" element={<SolarPanels />} />
        <Route path="solarroof" element={<SolarRoof />} />
      </Routes>
    </div>
  );
}
