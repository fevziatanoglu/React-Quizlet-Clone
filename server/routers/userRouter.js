const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const User = require("../models/userModel.js");
const Folder = require("../models/folderModel.js");

router.post("/register", async (req, res) => {
   
    try {
       
        const { username, email, password } = req.body;

        // const isUserExist = await User.findOne({ $or: [{ username }, { email }] });

        // if (isUserExist) {
        //     return res.status(409).json({ message: "This email or username already taken!" })
        // }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(200).json({ message: "User created successfully.", user: newUser });


    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});


router.post("/login", async (req, res) => {

    try {

        const {email , password} = req.body;

        const user = await User.findOne({ email});
        if (!user) {
            return res.status(404).json({ message: "Wrong password or email!" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(403).json({ message: "Wrong password or email!" });
        }

        return res.status(200).json({ message: "Login successful.", user });

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });}

});


router.get("/getFolders/:id" , async  (req, res) =>{

    try{

        const {id} = req.params;

        const user = await User.findById({_id:id});

        if(!user){
            return res.status(404).json({ message: "User not found!" });
        }

        const userFolders = await Folder.find({ userId : id});

        return res.status(200).json({ message: "User's folders get successfully.", userFolders });


    }catch(error){
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});

router.get("/getUser/:id" , async  (req, res) =>{

    try{

        const {id} = req.params;

        const user = await User.findById({_id:id});

        if(!user){
            return res.status(404).json({ message: "User not found!" });
        }


        return res.status(200).json({ message: "User found successfully.", user });


    }catch(error){
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});









module.exports = router;