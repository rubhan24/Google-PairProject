const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Links data arrays to a constant
const resources = require("../Data/data.json")
// Uses JSON Data File

const results = require("../Data/data.js")
// Uses JS Data File

// Port Number
const port = 8080;

//Routes - First Route
app.get('/', (req, res) => res.send('Hello World'))

app.get('/topics', (req, res) => {
    res.json(resources)
});

app.get("/topics/:id", (req, res) => {
    try {
        let quoteId = req.params.id;
        if (!resources[quoteId]) {
            throw new Error(`Error: no search results for ${quoteId}.`);
        }
        res.json(resources[quoteId]);
    } catch (err) {
        res.status(404).send(err.message);        
    }
  });


// Route using JSON file

app.get('/foods', (req, res) => res.send(results))
// Route using JS File


// Starting the Sever
app.listen(port, () => console.log(`its alive on http://localhost:${port}`))











// app.get("/topics/id", (req, res) => {
//     try {
//         let quoteId = req.params.id;
//         if (!resources[quoteId]){
//             throw new Error (`Error: no search results for ${quoteId}.`);
//         }
//         res.json(resources[quoteId])
//     } catch (err){
//         res.status(404).send(err.message)
//     }
// })

module.exports = app;
