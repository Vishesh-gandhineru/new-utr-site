/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: 'img.nextpax.com',
        port: '',
      },
      {
        hostname: 'placehold.co',
        port: '',
      },
      {
        hostname: 'utr-images.s3.ap-south-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
