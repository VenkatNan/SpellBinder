const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        default : 'John'
    },
    splLvl: {
        type : Number,
        default : 3
    },
    class: {
        type : String,
        default : 'wizard'
    },
    img: {
        type : String,
        default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrYUuMqVB-EtbwLCrRA87Z19XJmED91rCHw&usqp=CAU'
    },


})


module.exports = mongoose.model('User', userSchema);