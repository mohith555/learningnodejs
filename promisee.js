// const { reject } = require("lodash");

function clearHall(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("every corner is cleaned");
           },2000)
    });
}
async function Method(){
    const temp=await clearHall();
    console.log(temp);
}
Method();