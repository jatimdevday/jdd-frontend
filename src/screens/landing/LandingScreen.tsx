import React from "react";
import Hero from "./sections/Hero";
import Sponsor from "./sections/Sponsor";
import Event from "./sections/Event";
import Benefit from "./sections/Benefit";
import Cta from "./sections/Cta";
import About from "./sections/About";
import Community from "./sections/Community";
import Gallery from "./sections/Gallery";
import Speaker from "./sections/Speaker";
import Agenda from "./sections/Agenda";
import { getSpeakers } from "@/lib/firebase";
import { Speakers } from "@/lib/schema";

const LandingScreen = async () => {
  const speakers = (await getSpeakers()) as Speakers;

  return (
    <>
      <Hero />
      <Sponsor />
      <About />
      <Agenda />
      <Speaker data={speakers} />
      <Event />
      <Benefit />
      <Gallery />
      <Cta />
      <Community />
    </>
  );
};

export default LandingScreen;
