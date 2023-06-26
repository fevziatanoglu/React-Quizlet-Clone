require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT , ()=> console.log('listening on port ' + process.env.PORT));
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(response => console.log("Connected mongodb!"))
    .catch(err => console.log("Mongodb connection error: " + err));