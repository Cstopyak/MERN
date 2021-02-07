const ExamController = require("../controllers/pirate.controller");

module.exports = app =>{
    app.get("/api/pirate", ExamController.findAll);

    app.get("/api/pirate/:_id", ExamController.findOnePirate);

    app.post("/api/pirate/new", ExamController.CreateOnePirate);

    app.put("/api/pirate/update/:_id", ExamController.updateOnePirate);

    app.delete("/api/pirate/delete/:_id", ExamController.deleteOnePirate);
}