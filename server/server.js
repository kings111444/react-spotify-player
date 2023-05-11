const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        clientId: '84bbb856f0b54f28bc26195259b2b2d9',
        clientSecret: 'dd7e2a9aa6ef4a64b1b47f42bd9ea176',
        redirectUri: 'http://localhost:3000',
        refreshToken
})

    spotifyApi
    .refreshAccessToken()
    .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
    })
    .catch(() => {
        res.status(400)
    })
})




app.post("/login", (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
    clientId: '84bbb856f0b54f28bc26195259b2b2d9',
    clientSecret: 'dd7e2a9aa6ef4a64b1b47f42bd9ea176',
    redirectUri: 'http://localhost:3000'

    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(()=> {
        res.status(400)
    })
})

app.listen(3001)