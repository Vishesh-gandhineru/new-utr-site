/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

export default nextConfig;
