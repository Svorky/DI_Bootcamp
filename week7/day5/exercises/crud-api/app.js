const express = require('express')
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const fetchPosts = require('./data/dataService')

app.get("/api/posts", async (req,res) => {
    let data = await fetchPosts()
    console.log(data)
    res.status(200).json(data)
})