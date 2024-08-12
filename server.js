const { initDB, read, insert } = require("./scripts/model")
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hola mundo"))

app.get("/usuarios", (req, res) => {
    const usuarios = read()
    res.send(usuarios)
})

app.post("/usuarios/json", express.json(), (req, res) => {
    const usuario = req.body.usuario
    const password = req.body.password
    console.log(usuario, password)
    //insert(usuario, password)
    res.send(`Usuario ${usuario} con password ${password} insertado`)
})

app.post("/usuarios/urlencoded", express.urlencoded({ extended: true }), (req, res) => {
    const usuario = req.body.usuario
    const password = req.body.password
    console.log(usuario, password)
    //insert(usuario, password)
    res.send(`Usuario ${usuario} con password ${password} insertado`)
})

app.listen("3000", () => console.log("Servidor lanzado en puerto 30000"))
