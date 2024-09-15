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
import { getContent, getSpeakers } from "@/lib/firebase";
import { Content, Speakers } from "@/lib/schema";

const LandingScreen = async () => {
  const speakers = (await getSpeakers()) as Speakers;
  const content = (await getContent()) as Content;

  return (
    <>
      <Hero content={content} />
      <Sponsor />
      <About content={content} />
      <Agenda />
      <Speaker speakers={speakers} />
      <Event />
      <Benefit content={content} />
      <Gallery />
      <Cta content={content} />
      <Community />
    </>
  );
};

export default LandingScreen;
