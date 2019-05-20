const fileDb = require('./../file-db');

function getPlace(req, res) {
    const places = fileDb.read('./place/places.json');
    const placeId = Number(req.params.placeId);
    setTimeout(() => {
        res.json(places.find(place => place.id === placeId));
    }, 1000);
};

module.exports = {
    getPlace,
};