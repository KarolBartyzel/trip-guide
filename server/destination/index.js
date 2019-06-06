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

module.exports = {
    getDestination,
    getRecommendedDestinations
};