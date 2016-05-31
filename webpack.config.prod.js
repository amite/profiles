const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    // CSS
    { 
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader'
    },
    { 
      test: /\.png$/, 
      loader: "url-loader?limit=100000" 
    },
    { 
      test: /\.jpg$/, 
      loader: "file-loader" 
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
    ]
  }
};
