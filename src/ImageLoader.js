export default function myImageLoader({ src, width, quality }) {
  return `https://jdd2024-b625b.web.app/${src}?w=${width}&q=${quality || 75}`;
}
