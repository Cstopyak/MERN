const AuthorController = require("../controllers//author.controllers");

module.exports = app =>{
    //get all
    app.get("/api/author", AuthorController.findAllAuthor);
    //get one
    app.get("/api/author/:_id", AuthorController.findOneAuthor);
    //get new dont forget it needs to be post request
    app.post("/api/author/new", AuthorController.createAuthor);

    //Delete
    app.delete("/api/author/delete/:_id", AuthorController.deleteAuthor);

    //update
    app.put("/api/author/update/:_id", AuthorController.updateAuthor);
}