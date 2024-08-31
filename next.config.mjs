/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "out",
  images: {
    // loader: "custom",
    // loaderFile: "./src/ImageLoader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
