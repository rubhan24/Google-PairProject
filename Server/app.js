const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Links data arrays to a constant
const resources = require("../Data/data.json")

// Port Number
const port = 8080;

// Starting the Sever
app.listen(port, () => console.log(`its alive on http://localhost:${port}`))


//Routes - First Route
app.get('/', (req, res) => res.send('Hello World'))

app.get('/topics', (req, res) => {
    res.json(resources)
});

module.exports = app;
