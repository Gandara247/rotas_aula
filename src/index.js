const express = require("express");
const { professoresById, professoresByStack } = require("./controllers/professoresController.js");
const app = express();


app.get('/professores/:id', professoresById);
app.get("/professores", professoresByStack);


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});