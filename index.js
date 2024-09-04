require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "sandy0223",
    "id": 123327853,
    "node_id": "U_kgDOB1nVbQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/123327853?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sandy0223",
    "html_url": "https://github.com/sandy0223",
    "followers_url": "https://api.github.com/users/sandy0223/followers",
    "following_url": "https://api.github.com/users/sandy0223/following{/other_user}",
    "gists_url": "https://api.github.com/users/sandy0223/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sandy0223/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sandy0223/subscriptions",
    "organizations_url": "https://api.github.com/users/sandy0223/orgs",
    "repos_url": "https://api.github.com/users/sandy0223/repos",
    "events_url": "https://api.github.com/users/sandy0223/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sandy0223/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sandeep Behera",
    "company": null,
    "blog": "",
    "location": "Somewhere on the Earth",
    "email": null,
    "hireable": null,
    "bio": "Hello world! 👋 I'm a passionate beginner in the world of web 🕸development and currently working on a simple👻 but exciting website project.",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 1,
    "following": 7,
    "created_at": "2023-01-22T19:40:10Z",
    "updated_at": "2024-08-25T04:50:10Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello from Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login !</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})