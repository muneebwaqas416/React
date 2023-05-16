const mongoose = require('mongoose')

const blogpost = new mongoose.Schema({
    title:{
        type : String,
        require : [true,'title is rquired']
    },
    description:{
        type : String,
        require : [true,'description is compulsory']
    },
    image:{
        type : String,
        require : [true,'image in blog post is also required']
    },
    Comment:{
        type : [],
    },

},{timestamps:true})


const blog = mongoose.model('Blog',blogpost);

module.exports = blog;