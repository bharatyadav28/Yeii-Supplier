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
};

export default withNextIntl(nextConfig);
