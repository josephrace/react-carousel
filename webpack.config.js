const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const config = {
  paths: {
    src: path.join(__dirname, 'src'),
    docs: path.join(__dirname, 'docs')
  }
};

const dev = {
  entry: {
    app: `${config.paths.src}/examples.js`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      links: [
        'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
      ]
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
            plugins: [
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        },
        include: [
          config.paths.src
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true
  }
};

const docs = {
  entry: {
    examples: `${config.paths.src}/examples.js`
  },
  output: {
    path: config.paths.docs,
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], {
      verbose: false
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: pkg.name,
      inject: false,
      appMountId: 'app',
      links: [
        'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
      ],
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
            plugins: [
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        },
        include: [
          config.paths.src
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  }
}

module.exports = env => {
  const targets = {
    dev,
    docs
  };

  return targets[env] ? targets[env] : {};
}
