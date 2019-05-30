const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const PORT = 3009;
const destination = require('./destination');
const fooddrink = require('./fooddrink');

app
/////ENDPOINTS/////
    .get('/destinations/:destinationId', destination.getDestination)
    .get('/fooddrinks/:fooddrinkId', fooddrink.getFooddrink)
/////ENDPOINTS/////
    .listen(PORT, () => {
        console.log(`Server listening on port ${PORT}!`)
    });
