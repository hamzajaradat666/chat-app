const path = require('path');

const publicPath = path.join(__dirname,'../public',)

const express = require('express');

const port = process.env.PORT || 3000

var app = express();

app.use(express.static(publicPath))

/* app.get('/index',(req,res)=>{

    res.send('%AYA');
    console.log("%AUATAAAAAAK");
    

}) */

app.listen(port,()=>{
    console.log(`Server is up on ${port}`);
    
})
/* console.log(__dirname + '/../public');
console.log(publicPath); */

