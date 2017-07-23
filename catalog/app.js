//https://stackoverflow.com/questions/21237105/const-in-javascript-when-to-use-it-and-is-it-necessary
const express = require('express');
const bodyParser = require("body-parser");
const monhgojs = require("mongojs");

const app = express();

const port = 3000;

app.use(bodyParser.json());

//Home
app.get("/", (req, res, next)=>{
  res.send("Please use /api/v1/products");
});

//fetch all products
app.get("/api/v1/products", (req, res, next)=>{
  res.send("List Products");
});

//Fetch Single Product
//:id is the placeholder for the product_id
app.get("/api/v1/products/:id", (req, res, next)=>{
  res.send("Fetch product "+ req.params.id);
});

//Add Product
app.post("/api/v1/products", (req, res, next)=>{
  res.send("Add Product");
});

//Update Product
app.put("/api/v1/products/:id", (req, res, next)=>{
  res.send("Update product "+ req.params.id);
});

//Delete Product
app.delete("/api/v1/products/:id", (req, res, next)=>{
  res.send("Delete product "+ req.params.id);
});

app.listen(port, ()=> {
  console.log("Server start on port "+ port);
});
