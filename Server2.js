const http=require('http');
const {load}=require('./Server1.js');
const writer = require('.Server1.js')
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
const port=8080;
app.listen(port,()=>console.log("server is running..."));
app.get('/user',(req,res)=>
{
    res.send(load())
});

writer.filewriter();

