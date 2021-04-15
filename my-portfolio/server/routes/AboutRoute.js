const aboutController = require("../controllers/about.controller");
const router = require('express').Router();
const aboutSchema = require('../models/about.model');

// get about user

router.get('/about', (req, res)=> {
    res.send('this is the about  get server test')
})
// get specific user by id 
// router.get('/about/:id',getAboutId)

// // add about user
router.post('/about', (req, res)=> {
    res.send('this is the about post server test lets add')
})
// router.post('/about',addAbout)
router.get('/about/:id', (req, res)=> {
    res.send('this is the about get server with Id')
})

router.put('/about/update/:id', (req, res)=> {
    res.send('this is the about edit server test')
})

router.delete('/about/:id', (req, res)=> {
    res.send('this is the about delete server test')
})
//end about



module.exports = router;