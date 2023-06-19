const express = require('express')
const app = express()
const port = 4000


const mongoDB = require("./db.js")
mongoDB();


app.get('/', (req, res) => {
  res.send('Hello welcome to express naveen chippala')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})