const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_ecommerce",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the prod  db"))
.catch(err => console.log("err not the db you are looking for", err));