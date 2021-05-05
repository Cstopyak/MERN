const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs');
const { remove } = require('../models/user.model');

//able to upload images to cloudinary

cloudinary.config({

    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET

})

//ability to upload images process

router.post('./upload', (req, res) =>{
    try {
        if(!req.files || Object.keys(req.files).length===0){
            return res.status(400).send('no files uploaded this time')
        }

        const file = req.files.file;
        if(file.size>1024*1024){
            removeTmp(file.tempFilePath);
            return res.status(400).json({msg:'file size too big'})

        }

        if(file.mimetype !=='image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath);
            return res.status(400).json({msg:'incorrect file format selected for images'})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"portfolioPictures"}, async(err, result) =>{
            if(err) throw err;

            removeTmp(file.tempFilePath);
            res.json({public_id:result.public_id, url: result.secure_url})
        })




    } catch (err) {
        res.status(500).json({msg:"err.message"})
    }

})

//delete image process



const removeTmp=(path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })

}

module.exports= router;