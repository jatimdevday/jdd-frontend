/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    loader: "custom",
    loaderFile: "./src/ImageLoader.js",
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
