"use client";

import { Content } from "@/lib/schema";
import Star from "@/assets/svgs/Star";
import ArrowDown from "@/assets/svgs/ArrowDown";

interface TermsItem {
  title: string;
  content: string;
}

const termsData: TermsItem[] = [
  {
    title: "1. Penerimaan Ketentuan",
    content:
      "Dengan menggunakan platform Jatim Developer Day atau menghadiri event kami, Anda menyetujui seluruh syarat dan ketentuan ini. Jika tidak setuju, harap tidak menggunakan layanan atau menghadiri event kami.",
  },
  {
    title: "2. Definisi",
    content: `Platform: Website resmi Jatim Developer Day untuk registrasi dan ticketing
Event: Kegiatan Jatim Developer Day dan event teknologi terkait
Peserta: Individu yang mendaftar dan menghadiri event
E-Tiket: Tiket elektronik sebagai bukti registrasi yang sah
Penyelenggara: Tim dan komunitas Jatim Developer Day`,
  },
  {
    title: "3. Registrasi dan Data Peserta",
    content: `• Peserta wajib memberikan data yang akurat dan terkini
• Satu email hanya dapat digunakan untuk satu registrasi per event
• Data akan digunakan untuk keperluan event, sertifikat, dan komunikasi resmi
• Peserta bertanggung jawab menjaga kerahasiaan data login jika ada
• Penyelenggara berhak menolak atau membatalkan registrasi yang tidak sesuai`,
  },
  {
    title: "4. Pembelian Tiket dan Pembayaran",
    content: `• Harga tiket sudah termasuk PPN dan biaya platform
• Pembayaran harus dilakukan sesuai batas waktu yang ditentukan
• Semua pembelian tiket bersifat final dan non-refundable
• Tiket yang tidak dibayar dalam batas waktu akan otomatis dibatalkan
• Penyelenggara berhak mengubah harga tiket sewaktu-waktu sebelum pembelian`,
  },
  {
    title: "5. Hak dan Kewajiban Peserta",
    content: `PESERTA BERHAK:
• Menghadiri semua sesi sesuai tiket yang dibeli
• Mendapat materi event, sertifikat, dan goodie bag
• Networking dengan peserta dan speaker lainnya
• Mendapat dokumentasi event untuk keperluan profesional

PESERTA WAJIB:
• Hadir tepat waktu sesuai jadwal registrasi
• Menunjukkan QR code e-tiket saat check-in
• Mematuhi protokol kesehatan dan keamanan venue
• Bersikap profesional dan menghormati peserta lain
• Menjaga fasilitas venue dan tidak merusak properti`,
  },
  {
    title: "6. Larangan dan Sanksi",
    content: `PESERTA DILARANG KERAS:
• Merekam atau live streaming tanpa izin penyelenggara
• Menjual kembali tiket di atas harga resmi (scalping)
• Membuat keributan atau mengganggu jalannya acara
• Melakukan aktivitas komersial tidak resmi di venue
• Membawa barang berbahaya atau terlarang
• Melakukan harassment terhadap peserta, speaker, atau panitia

Sanksi: Peserta yang melanggar dapat dikeluarkan dari venue tanpa pengembalian biaya.`,
  },
  {
    title: "7. Hak Kekayaan Intelektual",
    content: `• Semua materi, logo, dan konten event adalah milik Jatim Developer Day
• Peserta tidak diperkenankan menggunakan brand atau materi tanpa izin
• Foto dan video event dapat digunakan penyelenggara untuk promosi
• Dengan menghadiri event, peserta menyetujui penggunaan foto/video mereka
• Materi dari speaker tunduk pada hak cipta masing-masing pemilik`,
  },
  {
    title: "8. Privasi dan Perlindungan Data",
    content: `• Data peserta dilindungi sesuai peraturan perlindungan data Indonesia
• Data dapat dibagikan dengan sponsor dan partner resmi untuk keperluan event
• Data tidak akan dijual atau disalahgunakan untuk kepentingan komersial
• Peserta berhak mengajukan koreksi atau penghapusan data pribadi
• Komunikasi event akan dikirim ke email yang terdaftar`,
  },
  {
    title: "9. Tanggung Jawab dan Batasan Liabilitas",
    content: `PENYELENGGARA TIDAK BERTANGGUNG JAWAB ATAS:
• Kehilangan atau kerusakan barang pribadi peserta
• Cedera atau kecelakaan yang terjadi di luar kendali penyelenggara
• Keterlambatan atau pembatalan transportasi peserta
• Biaya akomodasi jika event dibatalkan atau ditunda
• Kerugian bisnis akibat tidak menghadiri event

PESERTA BERTANGGUNG JAWAB ATAS:
• Keamanan barang pribadi selama event
• Biaya perjalanan dan akomodasi
• Kepatuhan terhadap peraturan venue dan pemerintah`,
  },
  {
    title: "10. Perubahan Event",
    content: `Penyelenggara berhak:
• Mengubah jadwal, lokasi, atau format event dengan pemberitahuan minimal 7 hari
• Mengganti speaker jika ada halangan mendadak
• Menyesuaikan rundown acara sesuai kebutuhan
• Membatalkan event jika terjadi force majeure
• Mengubah kapasitas peserta sesuai regulasi venue`,
  },
  {
    title: "11. Protokol Kesehatan dan Keamanan",
    content: `• Peserta wajib mematuhi protokol kesehatan yang berlaku
• Penyelenggara berhak menolak peserta yang tidak sehat
• Peserta wajib mengikuti prosedur keamanan venue
• Barang berbahaya atau mencurigakan akan disita
• Pemeriksaan tas dapat dilakukan di pintu masuk`,
  },
  {
    title: "12. Dokumentasi dan Media",
    content: `• Event akan didokumentasikan untuk arsip dan promosi
• Live streaming atau rekaman mungkin dilakukan untuk sesi tertentu
• Peserta yang tidak ingin difoto/video dapat memberitahu panitia
• Materi dokumentasi menjadi aset penyelenggara`,
  },
  {
    title: "13. Penyelesaian Sengketa",
    content: `• Segala sengketa diselesaikan melalui musyawarah mufakat
• Jika tidak tercapai kesepakatan, berlaku hukum Republik Indonesia
• Yurisdiksi pengadilan adalah Surabaya, Jawa Timur
• Mediasi dapat dilakukan melalui lembaga yang disepakati kedua belah pihak`,
  },
  {
    title: "14. Ketentuan Tambahan",
    content: `• Syarat dan ketentuan dapat diubah sewaktu-waktu dengan pemberitahuan
• Perubahan penting akan dikomunikasikan via email dan website
• Penggunaan berkelanjutan platform dianggap menyetujui perubahan
• Jika ada klausul yang tidak berlaku secara hukum, klausul lain tetap berlaku
• Bahasa Indonesia adalah bahasa resmi untuk interpretasi dokumen ini`,
  },
  {
    title: "15. Informasi Kontak",
    content: `Untuk pertanyaan, keluhan, atau klarifikasi mengenai syarat dan ketentuan:
• Email: jatimdeveloperday@gmail.com
• Website: https://jatimdevday.id
• WhatsApp: 082228300495 (Iskandar)`,
  },
];

const TermsItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: TermsItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 px-6"
      onClick={onToggle}
    >
      <h3 className="text-lg font-semibold text-blackText pr-4">
        {item.title}
      </h3>
      <div
        className={`transition-transform duration-300 flex-shrink-0 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ArrowDown />
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-6 pb-6">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {item.content}
        </div>
      </div>
    </div>
  </div>
);

const TermsScreen = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-white py-12 md:py-24" id="terms">
      <div className="container mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Star />
            <h1 className="text-3xl md:text-4xl font-bold text-blackText">
              Syarat & Ketentuan
            </h1>
            <Star />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harap baca dengan teliti syarat dan ketentuan berikut sebelum
            mendaftar atau menghadiri Jatim Developer Day. Dengan mendaftar,
            Anda menyetujui seluruh ketentuan ini.
          </p>
          <div className="text-sm text-gray-500">
            Berlaku efektif: 1 Januari 2024
          </div>
        </div>

        {/* Terms Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {termsData.map((item, index) => (
              <TermsItem
                key={index}
                item={item}
                isOpen={true}
                onToggle={() => {}}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center space-y-4 mt-16">
          <h3 className="text-xl font-semibold text-blackText">
            Butuh Klarifikasi?
          </h3>
          <p className="text-gray-600">
            Jika ada pertanyaan mengenai syarat dan ketentuan ini, silakan
            hubungi tim kami.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/6282228300495"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Hubungi Kami
            </a>
            <a
              href="mailto:jatimdeveloperday@gmail.com"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200"
            >
              Email Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsScreen;
