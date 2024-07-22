const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send("index")
})
router.get('/about', (req, res) => {
    res.status(200).send("about")
})

module.exports = router