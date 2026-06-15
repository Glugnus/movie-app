/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mamp.one",
        pathname: "/wp-content/uploads/2024/09/**",
      },
    ],
  },
};

// https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg

export default nextConfig;
