const path = require('path');

module.exports = {
    // other configuration...
    resolve: {
        devServer: {
            compress: true,
            disableHostCheck: true,   // That solved it
        
         }   ,

         devServer: {
            disableHostCheck: false
          }, 
        fallback: {
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify'),
        },
    },
};
