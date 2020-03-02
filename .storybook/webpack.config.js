var path = require('path');

module.exports = {
    module: {
        rules: [
            // Transform all ES6 files to plain old ES5.
            {
                test: /\.(js|jsx)$/,
                exclude: [/bower_components/, /node_modules/, /styles/],
                loader: 'babel-loader',
                include: path.resolve(__dirname, '../../src')
            },
        ],
    }
};