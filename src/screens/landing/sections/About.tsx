import Star from "@/assets/svgs/Star";
import { Content } from "@/lib/schema";
import { ReactNode } from "react";

const Info = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Star />
      <p className="font-semibold">{title}</p>
      <Star />
    </div>
    <h6 className="font-semibold text-lg leading-relaxed">{children}</h6>
  </div>
);

const About = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-secondary text-white py-16 md:py-24" id="about">
      <div className="container mx-auto space-y-8">
        <Info title="Tentang Acara">{content?.about}</Info>
        <Info title="Goal">{content?.goal}</Info>
      </div>
    </div>
  );
};

export default About;
