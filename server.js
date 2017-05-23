const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const DB_URL = require('./database/url.js');
const db = require('./database/db.js');

// initiates webapck using your config rules
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/client'));

// hot reloads your react app on files change
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// connects with the database before starting the server
db.connect(DB_URL, (err) => {
  if (err){
    console.log('Unable to connect to mongo');
    process.exit(1);
  } else {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Listenning on port 3000');
    })
  }
})
