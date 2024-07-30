const express = require("express");
const app = express();
const port = 5000;
const routes = require('./routes/quizRoute.js');

app.listen(port, () => {
    console.log('server is listening on port 5000');
});

app.use(express.json());
app.use(express.text());

app.use('/quiz', routes);