var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: "dist",
    filename: "bundle.js",
    hash: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015']
        }
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })
  ],
  devServer: {
    hot: true,
    port: 3000
  }
};
