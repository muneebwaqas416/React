const express = require('express')

const {getAllBlogs , createBlogpost , updateblog , deleteblog , getsingleblog} = require("../controller/blogcontoller")

const router = express.Router();

///api/v1/blogs/create-blog
router.put('/update-blog/:id' , updateblog)

router.get('/all-blog' , getAllBlogs)

///api/v1/blogs/create-blog
router.post('/create-blog' , createBlogpost)

router.delete('/delete-blog/:id' , deleteblog)



module.exports = router;