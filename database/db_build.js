const MongoClient = require('mongodb').MongoClient;
const DB_URL = require('./url.js');

MongoClient.connect(DB_URL, (err, db) => {
  if(err) throw err;

  const guestHouse = db.collection('GuestHouse')
  guestHouse.insert({name: 'daher', tasty: true}, (err, result) => {
    guestHouse.find({name: 'daher'}).toArray((err, docs) => {
      console.log(docs);
      db.close();
    })
  })
})
