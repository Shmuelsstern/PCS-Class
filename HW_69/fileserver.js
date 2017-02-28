const fs = require('fs'),
    url = require('url');

module.exports = (req, res, next) => {
    let path = url.parse(req.url).pathname;
    fs.readFile('content/' + path, 'utf-8', (err, data) => {
        if (err) {
        next();
        }
        res.end(data);
    });
};