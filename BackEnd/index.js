const express = require('express')
var cors = require('cors')
const app = express();
const data = []

app.use(express.json());

app.use(cors())

app.post('/', (req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.send(req.body)
})


app.get('/', (req, res) => {
    res.send(data)
})


app.listen(5000)