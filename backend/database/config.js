const mongoose = require('mongoose');
const monogoDb = mongoose.connect('mongodb://localhost:27017/remedy')
.then(() => console.log('Database Connected!'))
.catch((err) => console.log("Error: " + err))

module.exports = monogoDb
