"use strict";

const http = require('http');
var charString = [],
    counter = 0;

function print() {
    for(var i=0;i<3;i++){
        console.log(charString[i]);
    }
}

for (var i = 0; i < 3; i++) {
    let  index=i;

    http.get(process.argv[i+2], (response) => {
        charString[index] = '';

        response.on('data', (data) => {
            charString[index] = charString[index] + data.toString();
        });

        response.on('end', () => {
            counter++;
            if (counter === 3) {
                print();
            }
        });
    });
}



