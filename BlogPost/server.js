const express = require("express");
const app = express();
const port = 8000;
const path = require('path');

app.use(cors());


require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// bring routes in with the project.
app.get('/api/ping', route1);
app.get('/api/posts:tags/:sortBy?', gatherTags);
app.listen(port, () => console.log(`ready to go on port ${port}`));