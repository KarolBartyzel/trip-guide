const fileDb = require('../file-db');


function getPlace(req, res) {
    const place = fileDb.read('./place/place.json');
    const placeId = Number(req.params.placeId);
    setTimeout(() => {
        res.json(place.find(place => place.id === placeId));
    }, 1000);
}

module.exports = {
    getPlace,
};