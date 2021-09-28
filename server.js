"use strict";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const mongoose = require("mongoose");


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{type: 'string'},
    image:{type: 'string'},
    price:{type: 'string'},
})
const Product = mongoose.model("myfavarite", ProductSchema);
mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true });

server.post('/addfav',fav)
function fav(req, res) {
    let {name,image,price}=req.body;
    Product.create(name,image,price).then(function(dbProduct) {
        console.log(dbProduct);
    })
    .catch(function(err) {
        console.log(err);
    });

}

const getfavarite=require('./Apidata')
server.get('/getfavdata',getfavarite);
async function getfav(req, res) {
    let query =req.query
    res.send(dat);
}


server.delete('deletefav:itemid',deletefav);
async function deletefav(req, res) {
    let itemid =req.params.itemid;
    Product.deleteOne({_id:itemid},function(err, element) {
if(err){ log( err.messege)}
    
    else
    res.send(element);

});
}

server.put('/updated',updated);
async function updated(req,res) {
    let {name,image,price}=req.body;
 Product.findByIdAndUpdate(itemid,{name,image,price},function(err, element) {
     if (err) {
         console.log(element);
     }
     else{
         res.send(element);
     }
 })
}







server.get('/', 
 function (req, res) { 
  res.send('Hello World') ;
})



const getapidata =require('./Apidata')
server.get('/allapidata',getapidata);


server.listen(PORT, () => {
    console.log(`app listening :${PORT}`)
  })