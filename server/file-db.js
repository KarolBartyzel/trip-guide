const fs = require('fs');

function read(fileName) {
    const rawdata = fs.readFileSync(fileName);
    return JSON.parse(rawdata);
}

module.exports = {
    read
};
