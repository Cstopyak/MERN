const router = require('express').Router();
const { authenticate } = require('../configs/jwt.config');
const loginRegController = require('../controllers/loginReg.controller');
const UserController= require('../controllers/user.controller');
   

    // module.exports = (app) => {
        router.post("/user/register", loginRegController.register);
        
        // app.post("/login", loginRegController.login);
        
        //authenticate and goes through JWT
        router.get("/users", authenticate, UserController.index);
        router.get("/logout", authenticate, loginRegController.logout);

    // }

    module.exports = router;