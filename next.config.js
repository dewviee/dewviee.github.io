/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    basePath: '/dewviee.github.io',
    assetPrefix: isProd ? '/dewviee.github.io/' : '',
    output: 'export',
}

module.exports = nextConfig
