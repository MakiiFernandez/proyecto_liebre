const express = require("express");

const app = express();

const path = require("path");

const publicPath= path.resolve(__dirname + '/public');

app.use(express.static(publicPath));

//levantar el servidor

const port =process.env.PORT|| 3001;
app.listen(port, () =>{
        console.log('Servidor corriendo');
});


app.get("/", (req, res) =>{
        res.sendFile(path.resolve('./views/home.html'))
});
app.get("/login", (req, res) =>{
        res.sendFile(path.resolve('./views/login.html'))
});

app.get("/register", (req, res) =>{
        res.sendFile(path.resolve('./views/register.html'))
});