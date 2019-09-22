// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
    cssModules: true
})
module.exports = {
    // some configuration
    assetPrefix: process.env.NODE_ENV === 'production' ? '/MStekin' : '',
    // another configuration
}