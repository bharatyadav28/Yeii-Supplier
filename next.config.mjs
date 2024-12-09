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
        hostname: "creative-story.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// https://yeii-api.onrender.com

export default withNextIntl(nextConfig);
