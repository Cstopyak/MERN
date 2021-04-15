require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express"),
    app = express(),
    port = process.env.PORT,
    cors = require("cors"),
    cookieParser = require("cookie-parser");
server = app.listen(port, () => console.log(`ready to go on port ${port}`));
const fileupload = require('express-fileupload');



// all the middleware that is needed
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({
    useTempFiles:true
}))



// bring routes in with the project.
require('./server/routes/user.routes')(app);
app.use('/', require('./server/routes/projectRoute'));
app.use('/', require('./server/routes/aboutRoute'));
require('./server/config/database.config');

// adding in all routing tomorrow to finish about and admin