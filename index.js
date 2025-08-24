require('dotenv').config() // .env file ka use karte huve

// npm run start

// listen  


const express = require('express') // require module syntax
// import express from 'express' // import module syntax
const app = express() // synatx ko use karte huve ik variable banaya hai app ka
const port = 3000 // port number virtual port number 

app.get('/', (req, res) => { // req = request, res = response // this is a call back functtion 
    res.send('Hello World!') // response send karta hai hello world
})

app.get('/twitter', (req, res) => {
    req.send('muhammadusmanwaris')
})


app.get('/instagram', (req, res) => {
    res.send('<h1>this is instagram</h1>') // hotreloading
})

app.get('/facebook', (req, res) => {
    res.send('<h1>this is facebook</h1>') // hotreloading
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// .env
