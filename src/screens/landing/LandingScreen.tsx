import { getBenefits } from "@/lib/firebase";
import { Benefits, Content } from "@/lib/schema";
import About from "./sections/About";
import Agenda from "./sections/Agenda";
import Benefit from "./sections/Benefit";
import Community from "./sections/Community";
import Cta from "./sections/Cta";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Parallel from "./sections/Parallel";
import Speaker from "./sections/Speaker";
import Sponsor from "./sections/Sponsor";
import Ticket from "./sections/Ticket";

const LandingScreen = async ({ content }: { content?: Content }) => {
  const benefits = (await getBenefits()) as Benefits;
  return (
    <>
      <Hero content={content} />
      <Community />
      <About content={content} />
      <Speaker />
      <Parallel />
      <Agenda content={content} />
      <Benefit benefits={benefits} />
      <Gallery />
      <Ticket />
      <Cta content={content} />
      <Sponsor />
    </>
  );
};

export default LandingScreen;
