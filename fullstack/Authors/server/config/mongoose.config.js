const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/author",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the author db"))
.catch(err => console.log("err not the db you are looking for", err));