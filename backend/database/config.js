const mongoose = require('mongoose');
const monogoDb = mongoose.connect('mongodb+srv://hammadbutt02123:8pEsm2Ct3SIgrtAo@remedy.a6g0jlv.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Database Connected!'))
.catch((err) => console.log("Error: " + err))

module.exports = monogoDb
