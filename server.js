const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

console compiler = webpack(webpackConfig);

app.use(express.static(__dirname, '/client'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listenning at ${host}:${port}`);
});
