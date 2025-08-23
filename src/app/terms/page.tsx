export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Syarat & Ketentuan Event
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Jatim Developer Days 2025
            </h2>

            <div className="space-y-6 text-gray-700">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1. Ketentuan Umum
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Event ini terbuka untuk umum dengan usia minimal 17 tahun
                  </li>
                  <li>
                    Setiap peserta wajib membawa identitas asli (KTP/SIM/Paspor)
                  </li>
                  <li>
                    Peserta wajib mengikuti protokol kesehatan yang berlaku
                  </li>
                  <li>
                    Event berlangsung pada tanggal 12 November 2025 di Malang,
                    Indonesia
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Ketentuan Tiket
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Tiket yang sudah dibeli tidak dapat dikembalikan atau
                    ditukar
                  </li>
                  <li>
                    Transfer tiket kepada pihak lain diperbolehkan dengan
                    pemberitahuan maksimal 3 hari sebelum event
                  </li>
                  <li>Setiap tiket berlaku untuk 1 (satu) orang</li>
                  <li>Tiket yang hilang atau rusak tidak dapat diganti</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. Ketentuan Pembayaran
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Pembayaran dilakukan melalui payment gateway yang tersedia
                  </li>
                  <li>
                    Pembayaran harus lunas dalam waktu 15 menit setelah
                    pemesanan
                  </li>
                  <li>Konfirmasi pembayaran akan dikirim melalui email</li>
                  <li>
                    Bukti pembayaran wajib disimpan sebagai bukti transaksi
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4. Ketentuan Event
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Peserta wajib hadir 30 menit sebelum event dimulai</li>
                  <li>
                    Peserta wajib mengikuti seluruh sesi acara sesuai jadwal
                  </li>
                  <li>
                    Dilarang membawa makanan dan minuman ke dalam ruang acara
                  </li>
                  <li>
                    Dilarang melakukan aktivitas yang mengganggu jalannya acara
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5. Pembatalan & Refund
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Pembatalan dapat dilakukan maksimal 7 hari sebelum event
                  </li>
                  <li>Refund akan diproses dalam waktu 14 hari kerja</li>
                  <li>
                    Biaya administrasi sebesar 10% dari harga tiket akan
                    dikenakan
                  </li>
                  <li>
                    Pembatalan kurang dari 7 hari sebelum event tidak dapat
                    direfund
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  6. Force Majeure
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Event dapat dibatalkan atau ditunda karena kondisi force
                    majeure
                  </li>
                  <li>
                    Force majeure meliputi bencana alam, kerusuhan, atau
                    kebijakan pemerintah
                  </li>
                  <li>
                    Dalam kondisi force majeure, refund penuh akan diberikan
                  </li>
                  <li>
                    Informasi pembatalan akan disampaikan melalui email dan
                    media sosial resmi
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  7. Kontak & Informasi
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: support@event.com</li>
                  <li>WhatsApp: +62 812-3456-7890</li>
                  <li>Website: https://busya.id</li>
                  <li>Jam operasional: Senin - Jumat, 09:00 - 17:00 WIB</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 text-center">
                <strong>Catatan:</strong> Dengan melanjutkan ke pembayaran, Anda
                dianggap telah membaca, memahami, dan menyetujui seluruh syarat
                dan ketentuan di atas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
