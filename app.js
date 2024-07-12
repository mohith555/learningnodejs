// const {mohith,krishna}=require('./names');
// const Meth=require('./display');
// Meth(krishna);
// Meth(mohith);
// Meth("tharun");
// const os =require('os');
// const system={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()
// }
// console.log(system)

//reading and writing files in asynchoronous
// const {readFile,writeFile, read}=require('fs');
// const util=require('util');
// let readfilepromise=util.promisify(readFile);
// let writefilepromise=util.promisify(writeFile);
// async function Method(){
//     try{
//         console.log(1);
//         const first=await readfilepromise('./fsmodule/syncmodule/first.txt','utf-8');
//         const second=await readfilepromise('./fsmodule/syncmodule/second.txt','utf-8');
//         console.log(first,second);
//         await writefilepromise('./displayasynpromise',`${first} and ${second}`);
//         console.log(2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// Method();

//or same we can skip some step like this below that modify upper one
// const {readFile,writeFile, read}=require('fs').promises;
// async function Method(){
//     try{
//         console.log(1);
//         const first=await readFile('./fsmodule/syncmodule/first.txt','utf-8');
//         const second=await readFile('./fsmodule/syncmodule/second.txt','utf-8');
//         console.log(first,second);
//         await writeFile('./displayasynpromise',`${first} and ${second}`);
//         console.log(2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// Method();

const eventEmitter=require('events');
const customemitter=new eventEmitter();
customemitter.on('meth',()=>{
    console.log("hi this is emitter");
})
customemitter.emit('meth');