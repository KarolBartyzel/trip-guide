const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const PORT = 3009;
const place = require('./place');

app
/////ENDPOINTS/////
    .get('/places/:placeId', place.getPlace)
/////ENDPOINTS/////
    .listen(PORT, () => {
        console.log(`Server listening on port ${PORT}!`)
    });
