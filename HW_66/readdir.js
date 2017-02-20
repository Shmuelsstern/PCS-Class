var fs= require('fs');

fs.readdir(process.argv[2],(err,list)=>{
    list.forEach((file)=>{
        if(file.endsWith('.'+process.argv[3])){
         console.log(file);
        }
    });
});