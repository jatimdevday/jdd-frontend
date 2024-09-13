const BASE_URL = process.env["BASE_URL"] ?? "https://jdd2024-b625b.web.app";

export default function myImageLoader({ src, width, quality }) {
  // Periksa apakah src sudah berupa URL absolut
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `${src}?w=${width}&q=${quality || 100}`;
  }

  // Jika src tidak memiliki slash awal, tambahkan BASE_URL dengan tepat
  const normalizedSrc = src.startsWith("/") ? src.substring(1) : src;

  // Gabungkan BASE_URL dengan normalizedSrc
  return `${BASE_URL}/${normalizedSrc}?w=${width}&q=${quality || 100}`;
}