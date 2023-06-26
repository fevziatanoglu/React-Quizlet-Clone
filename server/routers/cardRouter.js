const express = require('express');
const router = express.Router();

const Card = require("../models/cardModel.js");
const Folder = require("../models/folderModel.js");



router.post("/add" , async (req, res) => {

    try{
        
        const { folderId , word , meaning} = req.body;
        
        const folder = await Folder.findById(folderId);

        if(!folder){
            return res.status(404).json({ message: "Folder not found!" });
        }

        const newCard = await Card.create({
            folderId,
            word,
            meaning
        })

        return res.status(200).json({ message: "Card added successfully.", card : newCard });

    }catch(error){
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});


router.put("/update" , async (req, res) => {

    try{
        // const { folderId , newWord , newMeaning} = req.params;
        const { folderId , cardId , newWord , newMeaning} = req.body;

        const folder = await Folder.findOneAndUpdate({_id : folderId}, {updatedAt : Date.now()} , {new : true});

        if(!folder){
            return res.status(404).json({ message: "Folder not found!" });
        }

        const updatedCard = await Card.findOneAndUpdate({_id : cardId}, {word : newWord , meaning : newMeaning} , {new :true});

        return res.status(200).json({ message: 'Card updated successfully', updatedCard });

    }catch(error){
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});


router.delete("/remove/:cardId" , async ( req , res) =>{

    try{
        
        const {cardId} = req.params;
        const removedCard = await Card.findByIdAndDelete({_id:cardId});
        if(!removedCard){
            return res.status(404).json({ message: "Card not found!" });
        }

        return res.status(200).json({ message: 'Card removed successfully', removedCard });

    }catch(error){
        return res.status(400).json({ message: "Unexpected error!", error });
    }

});





module.exports = router;