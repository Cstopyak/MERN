const mongoose = require("mongoose");

mongoose.connect("mongoddb://localhost/hello",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the hello db"))
.catch(err => console.log("no one said hi to me", err));