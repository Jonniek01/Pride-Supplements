const User = require ('../models/User')
const bcrypt = require('bcrypt')
module.exports = {
    getUsers : async (req, res)=>{
        res.send('Getting users')
    },
    register : async (req, res)=>{
        const {username, password}= req.body;
        console.log(req.body)
        // const duplicate = await User.findOne({'contact.email': email}).exec();
        const duplicate = false;

        if(duplicate){
            return res.sendStatus(409);
        }
        try {
            //create and store user
            const result =  await User.create({
                username: username,
                password: await bcrypt.hash(password,8,)
            });
            console.log("result",result);
            res.json(result);
        }
        catch(err){
            res.status(500).json({'message':err.message})
        }

    }
}