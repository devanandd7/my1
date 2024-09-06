const express = require('express');
const app = express();
const connectToMongo=require('./database')

const port = 5000;

app.get('/', (req, res) => {               
  res.send('Hello World! ram')
})

connectToMongo()
app.listen(port,()=>{
    console.log(`online on ${port}`)
})