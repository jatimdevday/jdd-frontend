export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Hubungi Kami
          </h1>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Ada pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informasi Kontak */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Informasi Kontak
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">support@event.com</p>
                    <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-medium text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-500">Respon dalam 2 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🌐</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Website</h3>
                    <p className="text-gray-600">https://busya.id</p>
                    <p className="text-sm text-gray-500">Informasi lengkap event</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat</p>
                    <p className="text-sm text-gray-500">09:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Kirim Pesan
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contoh@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Pilih subjek</option>
                    <option value="ticket">Pertanyaan Tiket</option>
                    <option value="payment">Pembayaran</option>
                    <option value="event">Informasi Event</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Pertanyaan yang Sering Diajukan
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Bagaimana cara membeli tiket?
                </h3>
                <p className="text-gray-600 text-sm">
                  Pilih tipe tiket yang diinginkan, isi data pemegang tiket, dan lanjutkan ke pembayaran melalui payment gateway yang tersedia.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Apakah tiket bisa direfund?
                </h3>
                <p className="text-gray-600 text-sm">
                  Tiket dapat direfund maksimal 7 hari sebelum event dengan biaya administrasi 10%.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Berapa lama waktu pembayaran?
                </h3>
                <p className="text-gray-600 text-sm">
                  Pembayaran harus lunas dalam waktu 15 menit setelah pemesanan tiket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
