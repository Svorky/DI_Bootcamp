const express = require("express");
const app = express();
const port = 5000;
const routes = require('./routes/books.js')

app.listen(port, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/books', routes)