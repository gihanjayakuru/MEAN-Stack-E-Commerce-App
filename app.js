const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const authJWT = require("./helpers/jwt");

const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());
//midleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(authJWT());

//Routes
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
// app.use(`${api}/orders`, ordersRoutes)

// app.get(`${api}/products`,(req, res) => {
//     const product = {
//         id:1,
//         name:'dress1aa',
//         des:'sdff'
//     }
//     res.send(product);
// })

// app.post(`${api}/products`,(req, res) =>{
//     const newProduct = req.body;
//     console.log(newProduct);
//     res.send(newProduct);
// })

// Database connection
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connection is ready....");
  })
  .catch((err) => {
    console.log(err);
  });

// server
app.listen(3000, () => {
  console.log("server is running http://localhost:3000" + api);
});
