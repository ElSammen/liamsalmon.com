/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAILURL: process.env.MAILURL
    }
}

module.exports = nextConfig
