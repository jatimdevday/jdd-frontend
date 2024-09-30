import React from "react";
import Hero from "./sections/Hero";
import Sponsor from "./sections/Sponsor";
import Agenda from "./sections/Agenda";
import Benefit from "./sections/Benefit";
import Cta from "./sections/Cta";
import About from "./sections/About";
import Community from "./sections/Community";
import Gallery from "./sections/Gallery";
import Speaker from "./sections/Speaker";
import Parallel from "./sections/Parallel";
import Flashback from "./sections/Flashback";
import Ticket from "./sections/Ticket";
import { getContent } from "@/lib/firebase";
import { Content } from "@/lib/schema";

const LandingScreen = async ({ content }: { content?: Content }) => {
  return (
    <>
      <Hero content={content} />
      <Community />
      <About content={content} />
      {/* <Flashback /> */}
      <Speaker />
      <Parallel />
      {/* <Agenda content={content} /> */}
      <Benefit />
      <Gallery />
      {/* <Ticket /> */}
      <Cta content={content} />
      {/* <Sponsor /> */}
    </>
  );
};

export default LandingScreen;
