const express = require("express");
const app = express();
// const port= 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
const productRoutes = require("./routes/productRouter");

//Load Environment variables
dotenv.config();

const port = process.env.PORT || 3000;

//connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MDB".bgCyan))
.catch((err)=> console.error("Could not connect to MDB", err));

//Routes
app.use("/api/products/", productRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })