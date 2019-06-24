const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

module.exports = (env) => {
  const isProd = env === 'production';

  const plugins = {
    dev: [
      new VueLoaderPlugin(),
      new webpack.ProvidePlugin({
        axios: 'axios',
        Vue: ['vue/dist/vue.esm.js', 'default'],
        Vuex: 'vuex',
        VueTheMask: 'vue-the-mask',
        _: 'lodash',
        Velocity: 'velocity-animate',
        'velocity-ui': 'velocity-animate/velocity.ui',
      }),
    ],
    prod: [
      new VueLoaderPlugin(),
      new ProgressBarWebpackPlugin(),
      new webpack.DefinePlugin({
        'progress.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
  };

  return {
    entry: {
      app: path.join(__dirname, './src/main.js')
    },
    output: {
      path: path.resolve(__dirname, 'frontend/dist'),
      publicPath: 'dist/',
      filename: '[name].js'
    },
    watchOptions: {
      poll: 100,
    },
    stats: {
      children: false,
    },
    devtool: 'inline-source-map',
    watch: !isProd,
    devServer: {
      contentBase: path.join(__dirname, '/'),
      overlay: true,
      host: '0.0.0.0',
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false,
            },
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                context: '',
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use:  [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/assets/scss/_base.scss',
              },
            },
          ],
        },
      ]
    },
    plugins: isProd ? plugins.prod : plugins.dev,
  };
};
