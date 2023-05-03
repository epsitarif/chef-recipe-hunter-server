const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const allChef = require('./data/data.json');
const allRecipe = require('./data/recipe.json')

app.get('/', (req, res) =>{
        res.json({ message: "hello server is running" })
});

app.get("/allData", (req, res) => {
    res.send(allChef)
});

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = allChef.chef.find(chef => chef._id == id)
    res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = allRecipe.filter(recipe => recipe.chef_id == id)
    res.send(selectedRecipe)
})

app.listen(5000, () => {
    console.log("Chef are doing very well")
});