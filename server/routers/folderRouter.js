const express = require('express');
const router = express.Router();

const User = require("../models/userModel.js");
const Folder = require("../models/folderModel.js");
const Card = require("../models/cardModel.js");


router.post("/add", async (req, res) => {

    try {
        
        const { userId, title, description } = req.body;

        console.log("test")

        const newFolder = await Folder.create({
            userId,
            title,
            description,
        });

        return res.status(200).json({ message: "Folder created successfully.", folder: newFolder });

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }
});

router.put("/update", async (req, res) => {

    try {
        // const {folderId , newTitle , newDescription} = req.params;
        const { folderId, newTitle, newDescription } = req.body;
        const updatedFolder = await Folder.findOneAndUpdate({ _id: folderId }, { title: newTitle, description: newDescription, updatedAt: Date.now() }, { new: true })
        if (!updatedFolder) {
            return res.status(404).json({ message: "Folder not found!" });
        }

        // const updatedFolder = await Folder.findOne({_id : folderId});

        return res.status(200).json({ message: 'Folder updated successfully', updatedFolder });


    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});


router.get("/getAll", async (req, res) => {

    try{

        const allFolders = await Folder.find();
        return res.status(200).json({ message: 'Getting all folders successful' , allFolders});

    }catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }


});

router.get("/getCards/:folderId", async (req, res) => {

    try {
        const { folderId } = req.params;

        const folder = await Folder.findById({ _id: folderId });

        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }

        const folderCards = await Card.find({ folderId });

        return res.status(200).json({ message: "Folder's cards get successfully.", folderCards });
    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});



router.delete("/remove/:folderId", async (req, res) => {
    try {

        const { folderId } = req.params;

        const removedFolder = await Folder.findByIdAndDelete({ _id: folderId });

        if (!removedFolder) {
            return res.status(404).json({ message: "Folder not found!" });
        }

        const removedFolderCards = await Card.deleteMany({ folderId: folderId });

        return res.status(200).json({ message: 'Folder removed successfully' });



    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }
})








module.exports = router;