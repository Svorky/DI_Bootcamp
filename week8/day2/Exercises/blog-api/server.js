const express = require('express')
const { router } = require('./routes/posts.router.js')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT || 5000, () => {
    console.log(`run on ${process.env.PORT || 5000}`)
})

app.use('/', router)