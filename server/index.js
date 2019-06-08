const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const PORT = 3009;
const destination = require('./destination');
const fooddrink = require('./fooddrink');
const place = require('./place');

app
/////ENDPOINTS/////
    .get('/destinations/discover', destination.getRecommendedDestinations)
    .get('/destinations', destination.getDestinations)
    .get('/destinations/:destinationId', destination.getDestination)
    .get('/fooddrinks/:fooddrinkId', fooddrink.getFooddrink)
    .get('/places/:placeId', place.getPlace)
/////ENDPOINTS/////
    .listen(PORT, () => {
        console.log(`Server listening on port ${PORT}!`)
    });
