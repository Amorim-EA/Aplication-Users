/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        externalDir: true,
        dynamicImport: false
      },
}

module.exports = nextConfig