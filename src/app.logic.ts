import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin';

const outputPath = `Outputs`;
let index:number = 0

const {b:base, l:limit, s:show} = yarg
console.log(base , limit , show);


let output = "====================================================\n";
// console.log("====================================================")
output+=`=================== Table of ${base} =====================\n`;
output+="====================================================\n"

while(index <= limit){
    output+= `${base} x ${index} = ${index*base} \n` 
    index++;    
}

fs.mkdirSync(outputPath,{recursive: true});
fs.writeFile(`${outputPath}/table_of_${base}.txt`, output, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

if(show){
    console.log(output)
}