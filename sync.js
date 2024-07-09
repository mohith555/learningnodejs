
let {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./fsmodule/syncmodule/first.txt','utf-8');
const second=readFileSync('./fsmodule/syncmodule/second.txt','utf-8');
console.log(first,second);
writeFileSync('./fsmodule/syncmodule/syncwrite.txt',`i understood i got twoo page they are : ${first} ,${second}`);
