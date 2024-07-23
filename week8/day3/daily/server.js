const express = require('express')
const { authrouter } = require('./routes/auth.router.js')
const userRouter = require("./routes/userRouter.js");

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000, () => {
    console.log(`run on ${process.env.PORT || 5000}`)
})

app.use('/', authrouter)
app.use("/user", userRouter)