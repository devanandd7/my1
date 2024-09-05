const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {               
  res.send('Hello World! ram')
})

app.listen(port,()=>{
    console.log(`online on ${port}`)
})