const BASE_URL = process.env["BASE_URL"] ?? "https://jdd2024-b625b.web.app";
export default function myImageLoader({ src, width, quality }) {
  return `${BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
}
