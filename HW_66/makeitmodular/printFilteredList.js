var mim = require ('./makeitmodular.js'),
    printList = function (err, data) {
        if(err){
            console.log('There is the following error',err);
        }else{
            data.forEach( data=> {
                console.log(data);
            });
        }
    };

mim(process.argv[2],process.argv[3],printList);