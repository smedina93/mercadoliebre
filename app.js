const express = require ("express");
const app = express() ;
const path = require ("path")
let PORT= process.env.PORT || 3000
app.use (express.static ("public"))
app.listen(PORT ,console.log("Listen on Port" + PORT))

app.get ("/",(req,res) => {
   res.sendFile (path.resolve("./views/home.html"))
 })

app.get ("/creatucuenta",(req,res)=> { res.sendFile(path.resolve("./views/register.html"))
})
app.get ("/ingresa",(req,res)=> { res.sendFile(path.resolve("./views/login.html"))
})