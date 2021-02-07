const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/belt_review",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the belt review db"))
.catch(err => console.log("err not the db you are looking for", err));