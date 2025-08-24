require('dotenv').config() // .env file ka use karte huve

// npm run start

// listen  


const express = require('express') // require module syntax
// import express from 'express' // import module syntax
const app = express() // synatx ko use karte huve ik variable banaya hai app ka
const port = 3000 // port number virtual port number 

const githubData = {
    "login": "usmanwarisalizia",
    "id": 113368971,
    "node_id": "U_kgDOBsHfiw",
    "avatar_url": "https://avatars.githubusercontent.com/u/113368971?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/usmanwarisalizia",
    "html_url": "https://github.com/usmanwarisalizia",
    "followers_url": "https://api.github.com/users/usmanwarisalizia/followers",
    "following_url": "https://api.github.com/users/usmanwarisalizia/following{/other_user}",
    "gists_url": "https://api.github.com/users/usmanwarisalizia/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/usmanwarisalizia/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/usmanwarisalizia/subscriptions",
    "organizations_url": "https://api.github.com/users/usmanwarisalizia/orgs",
    "repos_url": "https://api.github.com/users/usmanwarisalizia/repos",
    "events_url": "https://api.github.com/users/usmanwarisalizia/events{/privacy}",
    "received_events_url": "https://api.github.com/users/usmanwarisalizia/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-12T15:11:25Z",
    "updated_at": "2025-08-24T12:22:02Z"
}

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

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// .env
