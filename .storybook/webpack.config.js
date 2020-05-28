const SourcePlugin = require('./source-code-utils/webpackPlugin')
const path = require('path')

module.exports = ({ config }) => {
    // add loader that registers raw source code in a cache
    config.module.rules.push({
        test: /\.jsx?$|\.css$/,
        use: [
            {
                loader: path.resolve(__dirname, 'source-code-utils/webpackLoader.js'),
                options: { root: path.resolve(__dirname, '../src') },
            },
        ],
    })
    // add loader that registers compiled source code in a cache
    config.module.rules.unshift({
        test: /\.jsx?$|\.css$/,
        use: [
            {
                loader: path.resolve(__dirname, 'source-code-utils/webpackLoader.js'),
                options: {
                    root: path.resolve(__dirname, '../src'),
                    compiled: true,
                },
            },
        ],
    })
    // add plugin that collects the source code
    config.plugins.push(new SourcePlugin())
    // prevent filename mangling (which b0rks source file switching)
    config.mode = 'development'
    // prevent minification
    config.optimization.minimizer = []
    return config
}