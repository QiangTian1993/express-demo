const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myNewDatabase')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('连接成功')
});

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
        required: true,
        unique: true,
        index: 1
    },
    age: Number,
    city: String
})

const User = mongoose.model('User', usersSchema)

module.exports = User