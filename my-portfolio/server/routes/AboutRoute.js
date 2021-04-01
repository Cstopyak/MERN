const aboutController = require("../controllers/about.controller");

//getting about users
module.exports = app =>{
    app.get("/api/about", aboutController.findAll);

    app.get("/api/about/:_id", aboutController.findOneabout);

    app.post("/api/about/new", aboutController.CreateOneabout);

    app.put("/api/about/update/:_id", aboutController.updateOneabout);

    app.delete("/api/about/delete/:_id", aboutController.deleteOneabout);
}
// const router = require('express').Router();
// const {getAbout, getAboutId, addAbout, updateAbout, delAbout} = require('../controllers/about.controller');

// const aboutSchema = require('../models/aboutModel');



// ...........about............

// get about user
// router.get('/about',getAbout)

// // add about user
// router.post('/about',addAbout)


// // get specific user by id 
// router.get('/about/:id',getAboutId)


//   // update specific user by id
// router.put('/about/update/:id', updateAbout)


//   // delete specific user by id
// router.delete('/about/:id', delAbout
// )





// module.exports = router;