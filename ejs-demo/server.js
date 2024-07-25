const express = require( 'express' );
const ejs = require( 'ejs' );
const cors = require( 'cors' );

const app = express();
app.use( cors() );

app.set( 'view engine', 'ejs' );

app.use( '/', express.static( __dirname + '/public' ) );

app.get('/home', (req,res)=>{
    let user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.render('index', {
        user
    })
})

app.get('/shop', (req,res)=>{
    res.render('shop')
})

app.listen( 5000, () => {
    console.log( 'server listening 5000' );
} );