const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost//blog_posts",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log ("I found the blog db"))
.catch(err => console.log("err not the db you are looking for", err));