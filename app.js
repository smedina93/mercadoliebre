const express = require ("express");
const app = express() ;
const routesMain =require ("./routes/routesMain");
let PORT= process.env.PORT || 3000 ;
const path = require("path")

app.use (express.static ("public"));

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.listen(PORT ,console.log("Listen on Port" + PORT));

app.use ("/",routesMain)

