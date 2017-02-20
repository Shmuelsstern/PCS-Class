var fs = require('fs'),
    newLine = 0;
fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
    } else {
        data.toString().split('').forEach(function (char) {
            if (char == '\n') {
                newLine++;
            }
        });
    }
console.log(newLine);
});
