const express = require('express');
const app = express();
const bookRoute = require('./routes/book')

const port = 8000;

app.use(express.json())

app.use('/books', bookRoute)

app.listen(port, () =>{
   console.log(`Server running at http://localhost ${port}`) 
})