const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/result`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
            cacheDirectory: true,
            presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js']
  },
  plugins: []
}

