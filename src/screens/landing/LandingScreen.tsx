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
import Ticket from "./sections/Ticket";
import { getBenefits, getContent } from "@/lib/firebase";
import { Benefits, Content } from "@/lib/schema";

const LandingScreen = async ({ content }: { content?: Content }) => {
  const benefits = (await getBenefits()) as Benefits;
  return (
    <>
      <Hero content={content} />
      <Community />
      <About content={content} />
      <Speaker />
      <Parallel />
      {/* <Agenda content={content} /> */}
      <Benefit benefits={benefits} />
      <Gallery />
      {/* <Ticket /> */}
      <Cta content={content} />
      {/* <Sponsor /> */}
    </>
  );
};

export default LandingScreen;
