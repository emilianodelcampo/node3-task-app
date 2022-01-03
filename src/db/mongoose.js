const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
})

//to run mongod
///Users/emilianodelcampo/Documents/mongodb/bin/mongod --dbpath=/Users/emilianodelcampo/Documents/mongodb-data