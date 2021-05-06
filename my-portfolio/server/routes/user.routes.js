const { authenticate } = require('../configs/jwt.config');
const loginRegController = require('../controllers/loginReg.controller');
const UserController= require('../controllers/user.controller');
   

    module.exports = (app) => {
        app.post("/register", loginRegController.register);
        app.post("/login", loginRegController.login);
        
        //authenticate and goes through JWT
        app.get("/users", authenticate, UserController.index);
        app.get("/logout", authenticate, loginRegController.logout);
    }

    