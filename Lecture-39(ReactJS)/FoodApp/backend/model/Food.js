const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String
    },
    description:{
        type: String
    }
})

module.exports = mongoose.model('Foods',FoodSchema);