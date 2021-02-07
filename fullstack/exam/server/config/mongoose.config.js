const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam_db2",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the  db!!"))
.catch(err => console.log("err not the db you are looking for", err));