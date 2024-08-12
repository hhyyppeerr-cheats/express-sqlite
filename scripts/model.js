const fs = require("fs")
const path = require("path")
const dbpath = path.join(__dirname, "../db/users.db")
const sqlite = require("better-sqlite3")
const db = new sqlite(dbpath)

function initDB(){
    const init = fs.readFileSync(path.join(__dirname, "../db/init.sql"), "utf8")
    const statements = init.split(";").filter( statement => statement.trim() !== "")
    statements.forEach(statement => {
        db.prepare(statement).run()
    })
}

function read(){
    const usuarios = db.prepare("SELECT * FROM usuarios ORDER BY id DESC LIMIT 5 ").all()
    return usuarios
}

function insert(nombre, pass){
    const statement = db.prepare("INSERT INTO usuarios (nombre, password) VALUES (?, ?)")
    statement.run(nombre, pass)
}

module.exports = {
    initDB,
    read,
    insert
}

