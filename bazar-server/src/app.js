const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require('cors');
const routes = require("./routes/routes.js");

const app = express();  

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors())

// Routes
app.use("/", routes);   

// Static Files
app.use(express.static(path.resolve("public")));

module.exports = app;
