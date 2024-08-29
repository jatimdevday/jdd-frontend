import Star from "@/assets/svgs/Star";
import { ReactNode } from "react";

const Info = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Star />
      <p className="font-semibold">{title}</p>
      <Star />
    </div>
    <h6 className="font-semibold text-[20px] lg:text-[28px]">{children}</h6>
  </div>
);

const About = () => {
  return (
    <div className="bg-secondary text-white py-24">
      <div className="container mx-auto space-y-8">
        <Info title="Tentang Acara">
          Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi
          yang bertujuan untuk memfasilitasi kolaborasi antara komunitas,
          akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna
          mendorong inovasi dan pertumbuhan sektor digital.
        </Info>
        <Info title="Goal">
          Jawa Timur Developer Day 2024 hadir dengan tema: Membangun Ekosistem
          IT di Jawa Timur Melalui Komunitas. Acara ini diharapkan dapat
          menciptakan ekosistem yang kondusif bagi pertumbuhan industri
          teknologi dan startup di wilayah ini. Dengan memfasilitasi interaksi
          antara para developer, perusahaan, dan pemangku kepentingan lainnya,
          diharapkan dapat muncul peluang-peluang baru untuk mengembangkan
          bisnis dan menciptakan lapangan kerja. Selain itu, acara ini juga
          menjadi momentum bagi pemerintah daerah untuk memberikan dukungan yang
          lebih konkret terhadap pengembangan sektor teknologi di Jawa Timur.
        </Info>
      </div>
    </div>
  );
};

export default About;
