const fileDb = require('../file-db');

function getDestination(req, res) {
    const destinations = fileDb.read('./destination/destinations.json');
    const destinationId = Number(req.params.destinationId);
    setTimeout(() => {
        res.json(destinations.find(destination => destination.id === destinationId));
    }, 1000);
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getRecommendedDestinations(req, res) {
    const destinations = fileDb.read('./destination/destinations.json');
    setTimeout(() => {
        res.json(shuffle(destinations).slice(0, 8));
    }, 1000);
}

function matchDestination(destination, filterQuery) {
    let matched = false;
    if  (destination['city_name']) {
        matched = destination['city_name'].toLowerCase().includes(filterQuery);
    }
    if  (destination['country_name']) {
        matched = matched || destination['country_name'].toLowerCase().includes(filterQuery);
    }

    return matched;
}

function getDestinations(req,res) {
    const destinations = fileDb.read('./destination/destinations.json');
    const filterQuery = req.query.q ? req.query.q.toLowerCase() : '';
    setTimeout(() => {
        res.json(destinations.filter((d) => matchDestination(d, filterQuery)).slice(0, 5));
    }, 200);
}

module.exports = {
    getDestination,
    getRecommendedDestinations,
    getDestinations
};