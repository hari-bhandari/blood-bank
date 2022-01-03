const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
}
// next.js configuration
module.exports = withPlugins([ withOptimizedImages], nextConfig);