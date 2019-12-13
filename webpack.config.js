const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const CSSExtract = new MiniCssExtractPlugin({
    filename: 'styles.css'
  });

  return {
    entry: ['babel-polyfill', './src/app.js'],
    mode: env,
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
    },
    plugins: [CSSExtract, new webpack.DefinePlugin({ REACT_ENV: JSON.stringify(env) })],
    devtool: env === 'production' ? 'source-map' : 'inline-source-map'
  };
};
