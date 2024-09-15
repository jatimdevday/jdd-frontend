/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
