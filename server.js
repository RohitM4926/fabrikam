var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Fabrikam</h1>"
        +"<hr/>"
        +"<h3>Rohit Sanjay Mangale<h3>"
    );
});

var server=app.listen(3001);
console.log("this application run on port 3001 ");