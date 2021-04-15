// const projectController = require("../controllers/project.controller");
const router = require('express').Router();
const projectSchema = require('../models/project.model');

// get project user

router.get('/project', (req, res)=> {
    res.send('this is the project get server test')
})
// get specific user by id 
// router.get('/project/:id',getprojectId)

// // add project user
router.post('/project', (req, res)=> {
    res.send('this is the project post server test lets add')
})
// get a specific project
router.get('/project/:id', (req, res)=> {
    res.send('this is the project get server with Id')
})

router.put('/project/update/:id', (req, res)=> {
    res.send('this is the project edit server test')
})

router.delete('/project/:id', (req, res)=> {
    res.send('this is the project delete server test')
})
//end project



module.exports = router;