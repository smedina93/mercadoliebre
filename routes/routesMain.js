const express= require("express");
const routes = express.Router();
const controllerMain = require ("../controllers/controllerMain")

routes.get ("/",controllerMain.index)
 
 routes.get ("/creatucuenta",controllerMain.login)
 routes.get ("/ingresa",controllerMain.register)

 module.exports= routes
