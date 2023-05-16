const UserModel = require('../mongo');


exports.getAllusers = async (req,res)=>{
    try {
        console.log("req recived in getall users");
        const users = await UserModel.find({});
        return res.status(200).send({
            UserCount : users.length,
            users
        })

    } catch (error) {
        return res.status(500).send({
            message : 'error in getAllUsers'
        })
    }
}



exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(email+"in the login of user")
        const user = await UserModel.findOne({email : email})
        console.log(email)
        if(!email || !password){
            return res.status(400).send({
                message : "!!!! Please enter username and password"
            })
        }
        if(password.localeCompare(user.password)===0){
            return res.status(200).send({
                message : "Username and password are correct",
                user
            })
        }else{
            return res.status(400).send({
                message : "!!!! wrong Username and password"
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message : "Error in the login in controller.js"+error
            
        })
        
    }
}

exports.registerAllusers = async (req,res)=>{
    try {
        console.log("req recieved of register all user");
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(500).send({
                message : "Please fill all fields"
            })
        }
        //existing user
        const existinguser = await UserModel.findOne({email : email});
        if(existinguser){
            return res.status(500).send({
                message : "This account already exist please enter another email"+existinguser
            })
        }
        const new_User = new UserModel({username,email,password}).save().then(()=>{
                console.log("User data saved");
        }).catch((error)=>{
                console.log("error occured while saving data"+error);
        })
        return res.status(200).send({
            message : `New user created${username}${email}`
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message : "Error found in all getAllUsers in userController.js"+error
        })
    }
}

exports.update = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!email && (!password || !username)){
            return res.status(500).send({
                message : "Please write atleast email values",
            })   
        }

        if(password && username){
            const user = await UserModel.updateOne({email : email},{$set:{password:password , username:username}});
            return res.status(200).send({
                message : "Username and password updated",
                user
            })
        }else if(password || username){
            if(password){
                const user = await UserModel.updateOne({email : email},{$set:{password:password}});
                return res.status(200).send({
                    message : " password updated",
                    user
                })
            }else if(username){
                const user = await UserModel.updateOne({email : email},{$set:{username:username}});
                return res.status(200).send({
                    message : "Username updated",
                    user
                })
            }
        }
        
    } catch (error) {
        return res.status(400).send({
            message : "Error in call of update"+error
        })
    }
}