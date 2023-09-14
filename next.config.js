/** @type {import('next').NextConfig} */
const nextConfig = {
  //     images: {
  //     domains: ["images.pexels.com"],
  // },
// images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.pexels.com',
//         port: '',
//         pathname: '/photos/**',
//       },
//     ],
//   },
images: {
  domains: ["cdn.pixabay.com"]
}
}

module.exports = nextConfig
