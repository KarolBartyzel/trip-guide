const fileDb = require('../file-db');

function getDestination(req, res) {
    const destinations = fileDb.read('./destination/destinations.json');
    const destinationId = Number(req.params.destinationId);
    setTimeout(() => {
        res.json(destinations.find(destination => destination.id === destinationId));
    }, 1000);
};

module.exports = {
    getDestination,
};