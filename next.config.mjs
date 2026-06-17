/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        pathname: "/t/p/w500/**",
      },
    ],
  },
};

export default nextConfig;
