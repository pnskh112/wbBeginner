const path = require('path');

module.exports = {
    mode: 'development',
    entry: {app:'./src/app.js',sub: './src/sub.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
