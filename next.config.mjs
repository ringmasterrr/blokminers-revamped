/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // remotePatterns: ['picsum.photos', "blokminers-assets.s3.amazonaws.com"],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      pathname: '/**',
    }, {
        protocol: 'https',
        hostname: 'blokminers-assets.s3.amazonaws.com',
        port: '',
        pathname: '/**',
    }],
  }
};

export default nextConfig;
