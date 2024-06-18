/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    return [
      {
        // Match all static files with specific extensions
        source: '/:all*(svg|jpg|png|css|js)',
        headers: [
          {
            key: 'Expires',
            value: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString(), // Set Expires header to 30 days in the future
          }
        ]
      },
      
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.evbuc.com',
        port: '',
        pathname: '/**', // Adjust this pattern according to your specific path structure
      },
    ],
  }
};

export default nextConfig; // Using ES module syntax
