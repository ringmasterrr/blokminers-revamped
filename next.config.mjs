/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default {
    images: {
      domains: ['picsum.photos'],
    },
  };
