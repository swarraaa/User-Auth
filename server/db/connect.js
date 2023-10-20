const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('CONNECTED TO THE DB  ')
    })
    .catch((err) => {
      console.log('ERROR')
    })
}

module.exports = connectDB
