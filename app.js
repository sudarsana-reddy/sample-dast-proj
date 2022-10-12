const express = require('express')
const os = require('os')

const books = require('./data/books.json');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World! - ${os.hostname()}`)
})

app.get('/books', (req, res) => {  
  res.send(`${JSON.stringify(books)}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})