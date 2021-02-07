const mongoose = require("mongoose");
uri = `mongodb://localhost/${process.env.DB_NAME}`;
mongoose.connect("mongodb://localhost/Ecommerce",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the Ecommerce db"))
.catch(err => console.log("err not the db you are looking for", err));