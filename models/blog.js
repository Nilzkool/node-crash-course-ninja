const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this is the schema that we will use to interact with the database
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema); // this is the model that we will use to interact with the database

module.exports = Blog; // this is the model that we will use to interact with the database