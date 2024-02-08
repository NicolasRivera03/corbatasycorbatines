/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_TOKEN: process.env.API_TOKEN,
        API: process.env.API,
      
      },
};

export default nextConfig;
