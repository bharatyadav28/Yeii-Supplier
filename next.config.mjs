import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        // All requests starting with /api will be redirected
        source: "/api/:path*",
        // Replace with your external API URL
        destination: "https://yeii-api.onrender.com/:path*",
      },
    ];
  },
};

// https://yeii-api.onrender.com

export default withNextIntl(nextConfig);
