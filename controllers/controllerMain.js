const path = require ("path")
const controllerMain={
    index: (req,res) => {
        res.sendFile (path.resolve("./views/home.html"))
      },
    login: (req,res)=> { 
        res.sendFile(path.resolve("./views/register.html"))},
    register:(req,res)=> { 
        res.sendFile(path.resolve("./views/login.html"))
}

}

module.exports=controllerMain