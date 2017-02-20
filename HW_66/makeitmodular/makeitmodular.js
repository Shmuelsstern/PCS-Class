var fs = require('fs');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        var files = [];
        if(err){
            callback(err);
        }else{
            list.forEach((file) => {
                if (file.endsWith('.' + ext)) {
                    files.push(file);
                }
            });
            callback(null, files);
        }
    });
};

