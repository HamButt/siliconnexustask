/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
   const isDev = phase === PHASE_DEVELOPMENT_SERVER
  return {
    reactStrictMode: false,
    images: { unoptimized: true },
    env: {
      baseUrl: isDev ? 'http://localhost:5000' : 'https://siliconnexustask-backend.vercel.app',
    },
    // swcMinify: false,
  }
}
