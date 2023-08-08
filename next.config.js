/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? 'https://github.com/dewviee/dewviee.github.io' : '',
}

module.exports = nextConfig
