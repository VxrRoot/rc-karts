/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ["./styles"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
