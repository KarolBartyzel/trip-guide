const fileDb = require('../file-db');


function getFooddrink(req, res) {
    const fooddrink = fileDb.read('./fooddrink/fooddrink.json');
    const fooddrinkId = Number(req.params.fooddrinkId);
    setTimeout(() => {
        res.json(fooddrink.find(fooddrink => fooddrink.id === fooddrinkId));
    }, 1000);
};

module.exports = {
    getFooddrink,
};