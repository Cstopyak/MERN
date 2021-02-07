const MovieController = require("../controllers/movies.controllers");

module.exports = app =>{
    app.get("/api/movies", MovieController.findAll);

    app.get("/api/movies/:_id", MovieController.findOneMovie);

    app.post("/api/movies/new", MovieController.CreateOneMovie);

    app.put("/api/movies/update/:_id", MovieController.updateOneMovie);

    app.delete("/api/movies/delete/:_id", MovieController.deleteOneMovie);

    
}