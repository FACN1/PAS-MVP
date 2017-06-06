const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = require('./webpack.config.js');
const DB_URL = require('./database/url.js');
const db = require('./database/db.js');

const app = express();
// initiates webapck using your config rules
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/public')));

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

app.get('/api', (request, response) => {
  const data = db.get();
  let result = {};
  const guestHouse = data.collection('GuestHouse');
  guestHouse.find({ }).toArray((error, documents) => {
    result = documents[0].GuestHouses;
    response.send(result);
  });
});

app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


// connects with the database before starting the server
db.connect(DB_URL, (err) => {
  if (err) {
    console.log('Unable to connect to mongo');
    process.exit(1);
  } else {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Listening on port 3000');
    });
  }
});
