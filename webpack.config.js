const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;
const path = require('path');

module.exports = {
  entry:path.resolve(__dirname,'src')+'/index.js',
  output: {
    filename: "bundle.js",
    path:path.resolve(__dirname,'build')

  },
  module:{
    rules:[
      {
      test: /\.js|jsx$/,
      include : path.resolve(__dirname,'src'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },{ test: /\.txt$/, use: 'raw-loader' },
      {
      test: /\.css$/,
       use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        },
  ],
},
    ]
  },
  devServer: {
     host: 'localhost',
    port: port,
    historyApiFallback: true,
  open: true
},
  plugins: [
     new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};