const express = require('express')
const cors = require('cors')
const app = express();
const morgan = require('morgan')
const userRouter = require('./Routes/userRoutes')
const mongoose = require('mongoose')
const blogroutes = require('./Routes/blogRoutes')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));

///api/v1/userall-users
app.use('/api/v1/user',userRouter);

app.use('/api/v1/blogs',blogroutes)

app.get('/',(req,res)=>{
    res.send("request recieved");  
})

app.listen(8080,()=>{
    console.log("App is running on port 8080");
})