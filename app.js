const express= require("express");
const path=require("path");

const app=express();

const staticFiles = express.static(path.join(__dirname, '/public'));
app.use(staticFiles);

app.listen (3000,() => {
console.log ("servidor corriendo en el puerto 3000")
});

app.get ("/",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
    })

app.get ("/register",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
    })

app.get ("/login",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
    })