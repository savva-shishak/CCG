const path = require('path');
module.exports = {
  mode: 'development',
  entry: "./src/main.ts",
  watch: true,
  output: {
    path: path.join(__dirname, 'script'),
    publicPath: '/script/',
    filename: "main.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.ts']
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};