const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const data = require('./data/data.json')

app.get('/', (req, res) =>{
        res.send('Chef are Rocks')
});

app.get('/data', (req, res) =>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`Chef are doing very well: ${port}`)
})