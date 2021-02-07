const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");


app.use(cors());



require("./server/config/mongoose.config");


app.use(express.json(), express.urlencoded({extended: true}));

// bring routes in with the project.
require("./server/routes/movies.routes")(app);


app.listen(port, () => console.log(`ready to go on port ${port}`));