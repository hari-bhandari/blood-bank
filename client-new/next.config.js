const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
    images: {
        disableStaticImages: true
    },
}
// next.js configuration
module.exports = withPlugins([ withOptimizedImages], nextConfig);