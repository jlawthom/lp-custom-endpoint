const express = require('express');
const axios = require('axios');

var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/fullchain.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate };
const app = express();

app.use(express.json())

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => console.log('Listening on port 3000'));

const botId = "1234-abc-123-abcd";
const environment = "draft";
// const convId = "1234-abc-123-abcd";

app.get(`/v1/bots/${botId}/environments`, (req, res) => {
    console.log("");
    console.log("Req:");
    console.log(req.body);

    const response = ["draft", "alpha"];

    res.statusMessage = "Bot Found";
    res.status(200);
    res.json(response);
});

app.get(`/v1/bots/${botId}/environments/${environment}/state`, (req, res) => {
    console.log("");
    console.log("Req:");
    console.log(req.body);

    const response = {
        "state": "online",
        "version": "0.0.1"
    };

    res.statusMessage = "Bot Found";
    res.status(200);
    res.json(response);
});

app.put('/v1/bots/' + botId + '/environments/' + environment + '/conversations/:convId', (req, res) => {
    console.log("");
    console.log("Req:");
    console.log(req.body);

    const response = {

    };

    res.statusMessage = "Created";
    res.status(200);
    res.json(response);
});

app.post('/v1/bots/' + botId + '/environments/' + environment + '/conversations/:convId/events', (req, res) => {
    console.log("");
    console.log("Req:");
    console.log(req.body);

    const response = {
        "response": [
            {
                "type": "STRUCTURED_CONTENT",
                "data": {
                    "metadata": [{ "type": "ExternalId", "id": "ABCD1234" }],
                    "structuredContent": {
                        "type": "vertical",
                        "elements": [
                            {
                                "type": "button",
                                "click": {
                                    "actions": [
                                        { "text": "Recommend me a movie", "type": "publishText" }
                                    ]
                                },
                                "title": "Recommend a movie"
                            }
                        ]
                    }
                }
            }
        ],
        "analytics": {
            "intents": [
                {
                    "id": "base-structured-content",
                    "description": "Structured Content Message",
                    "confidenceScore": 1
                }
            ]
        }
    };

    res.statusMessage = "Created";
    res.status(200);
    res.json(response);
});