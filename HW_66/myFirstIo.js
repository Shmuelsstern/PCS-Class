var fs= require('fs');

const fileContents = fs.readFileSync(fs.readdir());
var newLine=0;
fileContents.toString().split('').forEach(function(char){
    if(char=='\n'){
        newLine++;
    }
});

console.log(newLine);