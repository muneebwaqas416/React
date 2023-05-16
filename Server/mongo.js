const mongoose = require('mongoose')

// const connection = mongoose.createConnection('mongodb://localhost:27017/blog').on('open',()=>{
//     console.log("Connected")
// }).on('error',()=>{
//     console.log("error")
// })

mongoose.connect('mongodb://localhost:27017/blog')
// , (err)=>{
//     if(err){
//         console.log("error in db"+error)
//     }else{
//         console.log("Connected")
//     }

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required :[true,'userName is mandatory'],
    },
    email :{
        type : String,
        required :[true,'email is mandatory'],
    },
    password :{
        type : String,
        required :[true,'password is mandatory'],
    }
},{timestamps:true})

const UserModel = mongoose.model('Users',userSchema)

module.exports = UserModel