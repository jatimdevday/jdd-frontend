"use client";

import { Content } from "@/lib/schema";
import { useState } from "react";
import Star from "@/assets/svgs/Star";
import ArrowDown from "@/assets/svgs/ArrowDown";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa itu Jatim Developer Day?",
    answer:
      "Jatim Developer Day adalah event teknologi di Jawa Timur yang bertujuan membangun ekosistem IT melalui komunitas. Event ini menghadirkan speaker ahli dari berbagai bidang teknologi dan dihadiri peserta dari berbagai latar belakang IT",
  },
  {
    question: "Apa saja jenis acara di Jatim Developer Day?",
    answer:
      "Event kami mencakup beragam topik teknologi modern seperti: Tech Talk dari para ahli industri Workshop hands-on dengan praktik langsung (dimulai setelah sesi seminar), Panel Discussion tentang tren teknologi dan karir, dan Community Gathering untuk networking dan kolaborasi",
  },
  {
    question: "Siapa yang bisa mengikuti Jatim Developer Day?",
    answer:
      "Event ini terbuka untuk semua kalangan teknologi seperti: Tech enthusiast yang ingin belajar teknologi terkini Mahasiswa IT dan fresh graduate Professional yang ingin upgrade skill dan networking",
  },
  {
    question: "Di mana event diselenggarakan?",
    answer:
      "Event diselenggarakan di Universitas Muhammadiyah Gresik (UMG) dengan fasilitas yang mendukung untuk berbagai sesi dan workshop.",
  },
  {
    question: "Apa saja yang akan saya dapatkan dari acara ini?",
    answer:
      "Peserta akan mendapatkan sertifikat partisipasi, merchandise eksklusif, networking opportunities dengan industry experts, akses ke workshop hands-on, dan knowledge sharing dari speaker-speaker berpengalaman di bidang teknologi.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Pendaftaran dapat dilakukan melalui website resmi kami. Kami akan mengumumkan pembukaan pendaftaran melalui media sosial dan website. Pastikan untuk follow akun media sosial kami agar tidak ketinggalan informasi.",
  },
  {
    question: "Apakah ada dress code untuk acara ini?",
    answer:
      "Tidak ada dress code khusus. Peserta dianjurkan menggunakan pakaian yang nyaman dan sopan. Kami merekomendasikan pakaian casual yang cocok untuk aktivitas seminar dan workshop.",
  },
  {
    question: "Apakah acara menyediakan makan dan minum?",
    answer:
      "Ya, kami menyediakan coffee break dan lunch untuk semua peserta yang terdaftar. Menu akan disesuaikan dengan kebutuhan dietary yang umum, dan kami akan mengakomodasi kebutuhan khusus jika diberitahu sebelumnya.",
  },
  {
    question: "Bagaimana jika saya tidak bisa hadir setelah mendaftar?",
    answer:
      "Kami memahami bahwa ada situasi yang tidak terduga. Silakan hubungi tim organizing committee melalui email atau media sosial untuk informasi mengenai kebijakan pembatalan atau transfer tiket.",
  },
  {
    question: "Apakah ada kesempatan untuk menjadi speaker atau volunteer?",
    answer:
      "Ya! Kami selalu membuka kesempatan bagi komunitas untuk terlibat sebagai speaker atau volunteer. Informasi call for papers dan volunteer recruitment akan diumumkan melalui website dan media sosial kami.",
  },
];

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 px-6"
      onClick={onToggle}
    >
      <h3 className="text-lg font-semibold text-blackText pr-4">
        {item.question}
      </h3>
      <div
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ArrowDown />
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  </div>
);

const FaqScreen = ({ content }: { content?: Content }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white py-12 md:py-24" id="faq">
      <div className="container mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Star />
            <h1 className="text-3xl md:text-4xl font-bold text-blackText">
              Frequently Asked Questions
            </h1>
            <Star />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan tentang Jatim Developer Day? Temukan jawabannya di
            sini. Jika tidak menemukan jawaban yang dicari, jangan ragu untuk
            menghubungi kami.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center space-y-4 mt-16">
          <h3 className="text-xl font-semibold text-blackText">
            Masih ada pertanyaan?
          </h3>
          <p className="text-gray-600">
            Tim kami siap membantu Anda. Hubungi kami melalui media sosial atau
            email.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/6282228300495"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqScreen;
