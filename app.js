const express = require('express');
const axios = require('axios');

const app = express();

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/', (req, res) => {
    const text = 'API Running!! You better go catch it';
    res.json(text);

    axios.post('https://envjnywsdj5nf.x.pipedream.net/', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    },
    {
        headers: {
            myHeader1: "lovely cushioned header, for GERRARRRD ..."
        }
    })
    .then((response) => {
        console.log('response:');
        console.log(response);
    })
    .catch((err) => {
        console.log('error:');
        console.log(err);
    })

})