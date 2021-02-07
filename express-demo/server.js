//Importing express
const express = require("express");
//create our app
const app = express();
//Set up our port
const port = 8000;

//This is for post requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Pseudo database
const animalFacts = [
    {animal: "Jellyfish", fact: "One species of jellyfish is immortal. It can revert back to its child state after having become sexually mature, and therefore never dies."},
    {animal: "Snail", fact: "A snail can sleep for 3 years at a time."}
]

//Make my first route
app.get("/api", (req, res) => {
    console.log("Hello from the base route /api!!");
    res.json({message: "You did it! You made your first API call!! Woot!!!@hkhdfkjfs"});
})

//Make my first post request
app.post("/api/post", (req, res) => {
    console.log(req.body)
    res.json({message: "We're good to go here!"})
})

app.get("/api/facts", (req, res) => {
    res.json(animalFacts);
})

app.post("/api/facts/add", (req, res) => {
    animalFacts.push(req.body);
    res.json({message: "Animal fact added!"})
})

//Listens for our server to start and console logs that it started
app.listen(port, () => console.log(`Running on port ${port}!!`));