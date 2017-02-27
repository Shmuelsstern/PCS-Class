'use strict';

const http = require('http');

http.get(process.argv[2], (response) => {
    let charString='';

    response.on('data', (data) => {
        charString=charString+data.toString();
    });

    response.on('end', () => {
        console.log(charString.length);
        console.log(charString);
    });
});