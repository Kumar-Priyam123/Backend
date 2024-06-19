require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData= {
    "login": "Kumar-Priyam123",
    "id": 146058036,
    "node_id": "U_kgDOCLSrNA",
    "avatar_url": "https://avatars.githubusercontent.com/u/146058036?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Kumar-Priyam123",
    "html_url": "https://github.com/Kumar-Priyam123",
    "followers_url": "https://api.github.com/users/Kumar-Priyam123/followers",
    "following_url": "https://api.github.com/users/Kumar-Priyam123/following{/other_user}",
    "gists_url": "https://api.github.com/users/Kumar-Priyam123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Kumar-Priyam123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Kumar-Priyam123/subscriptions",
    "organizations_url": "https://api.github.com/users/Kumar-Priyam123/orgs",
    "repos_url": "https://api.github.com/users/Kumar-Priyam123/repos",
    "events_url": "https://api.github.com/users/Kumar-Priyam123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Kumar-Priyam123/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-26T05:29:14Z",
    "updated_at": "2024-06-06T07:46:30Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('abccom')
})
app.get('/login', (req,res)=>{
    res.send(' Please login at chai aur code')
})
app.get('/UserInput', (req,res)=>{
    res.send('<h1> Please give Input </h1>')
})
app.get('/GithubData',(req,res)=>
{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})