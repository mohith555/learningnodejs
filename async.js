const { log } = require('console');
const {readFile,writeFile}=require('fs');
readFile('./fsmodule/asyncmodule/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./fsmodule/asyncmodule/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./fsmodule/asyncmodule/asyncwrite.txt',`here is the readed files they are:${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log(result);
        })
    })
})
