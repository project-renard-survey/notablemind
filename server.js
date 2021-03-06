var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.devtool = 'eval'
config.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './src/run',
]
config.plugins = [
  new webpack.DefinePlugin({ELECTRON: false}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.IgnorePlugin(/electron/),
]

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: __dirname + '/www',
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
