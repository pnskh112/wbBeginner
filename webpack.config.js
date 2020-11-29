const path = require('path');

module.exports = {
    mode: 'development',
    entry: {app:'./src/app.js',sub: './src/sub.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    }
}
