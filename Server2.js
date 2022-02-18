const http=require('http');
const parser = require('body-parser')
const {load}=require('./Server1.js');
const writer = require('./Server1.js')
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
app.use(parser.json())
const port=5900;
app.listen(port,()=>console.log("server is running..."));
app.get('/emp',(req,res)=>
{
    res.send(load())
});

writer.filewriter();

