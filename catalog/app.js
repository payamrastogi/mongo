//https://stackoverflow.com/questions/21237105/const-in-javascript-when-to-use-it-and-is-it-necessary
const express = require('express');
const bodyParser = require("body-parser");
const mongojs = require("mongojs");
const db = mongojs('catalog', ['products']);
const app = express();

const port = 3000;

app.use(bodyParser.json());

//Home
app.get("/", (req, res, next)=>{
  res.send("Please use /api/v1/products");
});

//fetch all products
//docs returned from the query
//err error
app.get("/api/v1/products", (req, res, next)=>{
  db.products.find((err, docs)=> {
      if(err)
      {
          res.send(err);
      }
      console.log("Products Found...");
      res.json(docs);
  });
});

//Fetch Single Product
//:id is the placeholder for the product_id
app.get("/api/v1/products/:id", (req, res, next)=>{
  //res.send("Fetch product "+ req.params.id);
  db.products.findOne({_id:mongojs.ObjectId(req.params.id)},(err, doc)=> {
      if(err)
      {
          res.send(err);
      }
      console.log("Product Found...");
      res.json(doc);
  });
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
