/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    loader: "custom",
    loaderFile: "./src/ImageLoader.js",
  },
};

export default nextConfig;
