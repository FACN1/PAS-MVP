const express = require('express');
const path = require('path');

const DB_URL = require('./database/url.js');
const db = require('./database/db.js');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.get('/api', (request, response) => {
  const data = db.get();
  let result = {};
  const guestHouse = data.collection('GuestHouse');
  guestHouse.find({ }).toArray((error, documents) => {
    result = documents[0].GuestHouses;
    response.send(result);
  });
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
