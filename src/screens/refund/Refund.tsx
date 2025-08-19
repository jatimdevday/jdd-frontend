import { Content } from "@/lib/schema";
import Star from "@/assets/svgs/Star";
import XMark from "@/assets/svgs/XMark";
import CheckIcon from "@/assets/svgs/CheckIcon";

const RefundScreen = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-white py-12 md:py-24" id="refund">
      <div className="container mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Star />
            <h1 className="text-3xl md:text-4xl font-bold text-blackText">
              Kebijakan Pengembalian Dana
            </h1>
            <Star />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harap baca kebijakan pengembalian dana dengan teliti sebelum
            melakukan pembelian tiket.
          </p>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <XMark />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-red-800">
                  Kebijakan No Refund
                </h3>
                <p className="text-red-700 mt-2">
                  <strong>
                    SEMUA PEMBELIAN TIKET JATIM DEVELOPER DAY BERSIFAT FINAL DAN
                    TIDAK DAPAT DIKEMBALIKAN (NON-REFUNDABLE)
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Kebijakan Umum */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              1. Kebijakan Umum
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dengan membeli tiket melalui platform Jatim Developer Day,
                peserta memahami dan menyetujui bahwa:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tidak ada pengembalian dana dalam kondisi apapun</li>
                <li>Semua penjualan tiket bersifat final</li>
                <li>
                  Peserta bertanggung jawab penuh atas keputusan pembelian
                </li>
                <li>
                  Kebijakan ini berlaku untuk semua kategori tiket (Early Bird,
                  Regular, Student)
                </li>
              </ul>
            </div>
          </div>

          {/* Pembatalan oleh Peserta */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              2. Pembatalan oleh Peserta
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-red-600">
                Tidak ada pengembalian dana untuk kasus:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Berhalangan hadir karena alasan pribadi</li>
                <li>Perubahan jadwal pribadi atau konflik agenda</li>
                <li>Kondisi darurat atau sakit mendadak</li>
                <li>Salah pilih kategori tiket atau sesi workshop</li>
                <li>Ketidakpuasan terhadap speaker atau materi</li>
                <li>Kondisi apapun yang berasal dari peserta</li>
              </ul>
            </div>
          </div>

          {/* Pembatalan oleh Penyelenggara */}
          <div className="bg-green-50 rounded-lg border border-green-200 p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              3. Pembatalan oleh Penyelenggara
            </h2>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <CheckIcon />
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-green-800">
                  Pengecualian khusus hanya berlaku jika:
                </p>
                <p>
                  <strong>Event dibatalkan total:</strong> Peserta mendapat
                  pengembalian dana senilai tiket untuk event Jatim Developer
                  Day lainnya maksimal dalam 12 hari kerja
                </p>
              </div>
            </div>
          </div>

          {/* Force Majeure */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              4. Force Majeure & Keadaan Darurat
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Jika event tidak dapat dilaksanakan karena:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Bencana alam (gempa, banjir, dll)</li>
                <li>Pandemi atau kebijakan pemerintah</li>
                <li>Kondisi darurat nasional/regional</li>
                <li>Masalah teknis venue yang tidak dapat diatasi</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">Penyelesaian:</p>
                <p className="text-blue-700">
                  Peserta mendapat pengembalian senilai tiket
                </p>
              </div>
            </div>
          </div>

          {/* Transfer Tiket */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              5. Transfer Tiket
            </h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Transfer tiket ke orang lain diperbolehkan maksimal H-3 (3
                  hari sebelum event)
                </li>
                <li>
                  <span className="font-semibold text-green-600">GRATIS</span>{" "}
                  tanpa biaya administrasi
                </li>
                <li>Transfer hanya sekali, tidak bisa ditransfer lagi</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold mb-2">Format Transfer:</p>
                <p className="text-sm">Nama asal: [Nama pembeli tiket asli]</p>
                <p className="text-sm">
                  Pemegang tiket: [Nama orang yang akan hadir]
                </p>
              </div>
            </div>
          </div>

          {/* Ketentuan Khusus */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blackText mb-6">
              6. Ketentuan Khusus
            </h2>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Tiket student dengan harga khusus tetap berlaku kebijakan no
                  refund
                </li>
                <li>
                  Tiket gratis atau complimentary tidak berlaku sistem
                  pengembalian
                </li>
                <li>
                  Workshop premium atau add-on session mengikuti kebijakan yang
                  sama
                </li>
                <li>
                  Platform tidak bertanggung jawab atas biaya perjalanan atau
                  akomodasi peserta
                </li>
              </ul>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">
                  ⚠️ Peringatan Penting
                </h3>
                <p className="text-yellow-700 mt-2">
                  Harap baca dengan seksama detail event, jadwal, dan lokasi
                  sebelum membeli tiket. Pembelian tiket dianggap sebagai
                  persetujuan penuh terhadap kebijakan no refund ini.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center space-y-4 mt-16">
          <h3 className="text-xl font-semibold text-blackText">
            Butuh Bantuan?
          </h3>
          <p className="text-gray-600">
            Jika ada pertanyaan mengenai kebijakan ini, silakan hubungi tim
            kami.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/6282228300495"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundScreen;
