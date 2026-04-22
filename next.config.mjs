/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // https://res.cloudinary.com/dj493l0jy/image/upload/v1773919208/foods/ba5fe863-4ff4-4140-b332-972572f98c60.png
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
