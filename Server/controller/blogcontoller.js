const { response } = require('express');
const blogModel = require('../Model/BlogModel');
const { ObjectId } = require('mongodb');




exports.getAllBlogs = async (req,res)=>{
    try {
        const blogs = await blogModel.find({});
        if(!blogs){
            return res.status(400).send({
                message : "Blogs not found"
            })
        }else
        {
            const count = blogs.length;
            return res.status(200).send({
                message : "Blogs recieved",
                blog_count : count,
                blogs
            })
        }
    } catch (error) {
        console.log("error occured in getAllblogs in BlogController"+error);
    }
}

exports.createBlogpost = async(req,res)=>{
    try {
        const {title,description,image,Comment} = req.body;
        if(!title || !description || !image){
            return res.status(500).send({
                message : "Please enter title,description,image in create blog post"
            })

        }
        let message;
        const newblog = await new blogModel({title,description,image,Comment}).save().then((response)=>{
            console.log("Create blog post send");
            message = response;
        }).catch((error)=>{
            console.log("error occured"+error);
            message = error;
        })
        return res.status(200).send({
            message : message,
            newblog
        })
    } catch (error) {
        console.log("error occured in createBlogpost in BlogController"+error);
        return res.status(404).send({
            message : "Create Blog Post error"
        })
    }
}

exports.updateblog = async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id)
        const {title,description,image} = req.body;
        if(title || description || image ){
            var blog = await blogModel.findByIdAndUpdate(id,{$set:{title:title,description:description,image:image}})
            return res.status(200).send({
                message : "Blog updated",
                blog
            })
        }else
        {
            return res.status(500).send({
                message : "Please input all values"
            })
        }
    } catch (error) {
        console.log("error occured in updateblog in BlogController"+error);
    }
}

exports.deleteblog = async(req,res)=>{
    try {
        const id = req.params.id;
        await blogModel.findOneAndDelete(id)
        return res.status(200).send({
            message : "Blog deleted",
        })
    } catch (error) {
        console.log("error occured in deleteblog in BlogController"+error);
    }
}



