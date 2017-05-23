// this file just builds the database
const MongoClient = require('mongodb').MongoClient;
const DB_URL = require('./url.js');

// connects with the remote database in mongodb website atlas
MongoClient.connect(DB_URL, (err, db) => {
  if(err) throw err;

  // creates a collection/table named guestHouse in the databse GuestHouse
  const guestHouse = db.collection('GuestHouse')
  // if collection exists drop it
  guestHouse.find({name: 'daher'}).toArray((error, documents) => {
    if (documents) {
      guestHouse.drop();
    };
  });
  // inserts data to the collection
  guestHouse.insert({name: 'daher', tasty: true}, (err, result) => {
    // searches through the collection to make sure that the data that we inserted is there
    guestHouse.find({name: 'daher'}).toArray((err, docs) => {
      db.close();
    });
  });
});
