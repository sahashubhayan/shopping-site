const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRouter = require("./routes/productRoutes");
// index.js er sathe router ta k link/import koriye dilam
const userRouter = require("./routes/userRoutes");

const app = express();

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

db.once("open", () => {
  console.log("Connected to database successfully");
})

app.get('/hello', function (req, res) {
    res.send('Hello Server')
  })

app.use(express.json());  
app.use(productRouter);
app.use(userRouter);

app.listen(3000, "0.0.0.0", () => {
    console.log("Server started at port 3000");
});
