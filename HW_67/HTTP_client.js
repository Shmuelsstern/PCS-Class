'use strict';

const http = require('http');

http.get(process.argv[2],(response)=>{

    response.setEncoding("utf8");

    response.on('data', data => {
        console.log(data);
    });

});

