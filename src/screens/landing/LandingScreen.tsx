import React from "react";
import Hero from "./sections/Hero";
import Sponsor from "./sections/Sponsor";
import Event from "./sections/Event";
import Benefit from "./sections/Benefit";
import Cta from "./sections/Cta";
import About from "./sections/About";
import Community from "./sections/Community";

const LandingScreen = () => {
  return (
    <>
      <Hero />
      <About />
      <Event />
      <Benefit />
      <Sponsor />
      <Cta />
      <Community />
    </>
  );
};

export default LandingScreen;
