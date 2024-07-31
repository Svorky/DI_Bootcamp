import express, { urlencoded, json } from 'express';
import cors from 'cors'

const app = express()

app.use(urlencoded({extended: true}))
app.use(json())
app.use(cors())

app.listen(process.env.PORT || 5000, () => {
    console.log(`run on ${process.env.PORT || 5000}`)
})

app.get('/api/hello', (req,res) => {
    res.send("Hello from Express")
})

app.post('/api/world', (req,res)=>{
    res.send("I received your POST request. This is what you sent me:\n" + JSON.stringify(req.body.name))
})