// const mongoose = require('mongoose')

// const Userschema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: String,
//     password: String
// })

// const UserModel = mongoose.model("User",Userschema)

// module.exports = UserModel;

const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
})

const UserModel = mongoose.model("User", Userschema)
module.exports = UserModel