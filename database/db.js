// this file helps us persist to connect to the database
const MongoClient = require('mongodb').MongoClient;

// state contains the databse connection if null then the functions will run
let state = {
  db: null,
}

// intialize a connection with the database
exports.connect = (url, done) => {
  if (state.db) return done()

  MongoClient.connect(url, (err, db) => {
    if (err) return done(err)
    state.db = db;
    done()
  })
}

// used to get data from an existing database connection
exports.get = () => {
  return state.db
}

// closes the connection when called
exports.close = () => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
