const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    blogContent:{
        type: String,
        required: true
    },
    imageUrl: String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users' // Model name
    }
});

module.exports = mongoose.model('blog',blogSchema);