var path = require('path');
var webpack = require('webpack');
const jsonServer = require('json-server');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isBuild = ENV === 'build:dev' || ENV === 'build:prod';

const PORT = '8080';

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: isBuild ? './' : `http://localhost:${PORT}/`,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/public'
      },
      {
        from: 'src/assets/images/',
        to: 'assets/images/[path][name].[ext]'
      }
    ])
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: PORT,
    before: function (app) {
      app.use('/api', jsonServer.router('db.json'));
    },
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}