// this file just builds the database
const MongoClient = require('mongodb').MongoClient;
const DB_URL = require('./url.js');

// connects with the remote database in mongodb website atlas
MongoClient.connect(DB_URL, (err, db) => {
  if (err) throw err;

  // creates a collection/table named guestHouse in the databse GuestHouse
  const guestHouse = db.collection('GuestHouse');
  // if collection exists drop it
  guestHouse.find({ }).toArray((error, documents) => {
    if (documents) {
      guestHouse.drop();
    }
  });
  // inserts data to the collection
  guestHouse.insert({
    GuestHouses: [
      {
        name: 'Daher',
        address: '6098 St 8, Nazareth',
        phone: '052-535-0691',
        coordinates: {
          latitude: 32.704783,
          longitude: 35.298489,
        },
        parkingLotName: 'Al Mutran Parking',
        parkingLotAddress: '6100 St, Nazareth',
        parkingLotCoordinates: {
          latitude: 32.705329,
          longitude: 35.298813,
        },
      },
      {
        name: 'SimSim',
        address: '632 St 3, Nazareth',
        phone: '077-551-7275',
        coordinates: {
          latitude: 32.704375,
          longitude: 35.298083,
        },
        parkingLotName: 'Al Mutran Parking',
        parkingLotAddress: '6100 St, Nazareth',
        parkingLotCoordinates: {
          latitude: 32.705329,
          longitude: 35.298813,
        },
      },
      {
        name: 'Vitrage',
        address: '6083 St 4, Nazareth',
        phone: '04-601-2130',
        coordinates: {
          latitude: 32.705086,
          longitude: 35.298032,
        },
        parkingLotName: 'Al Mutran Parking',
        parkingLotAddress: '6100 St, Nazareth',
        parkingLotCoordinates: {
          latitude: 32.705329,
          longitude: 35.298813,
        },
      },
    ],
  }, (insertErr) => {
    if (insertErr) throw insertErr;
    // searches through the collection to make sure that the data that we inserted is there
    guestHouse.find({ }).toArray((findErr, docs) => {
      if (findErr) throw findErr;
      // this shows us that table was created
      console.log(docs);
      db.close();
    });
  });
});
