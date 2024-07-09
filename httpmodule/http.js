const http=require('http')
const server=http.createServer((req,res)=>{
//    res.write('hey u got me');
    //   res.end(); 
    if(req.url==='/'){
        res.end('this is home page');
    }
    else if(req.url==='/about'){
        res.end('your in about page');
    }
    else{
    res.end(`<h1>Ooooops!</h1>
        <p>this page is not found</p>
        <a href="/>go back</a>
        `)
    }
    
    
});
server.listen(5555);