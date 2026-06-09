/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        
        protocol: "https",
        hostname: "www.milesweb.in",
      },
    ],
  },
};

module.exports = nextConfig;
