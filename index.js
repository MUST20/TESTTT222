let express = require("express")  // installer le framework express

const app = express() // création de l'app

let mysql = require("mysql2")



// connexion avec BD
app.use(express.urlencoded({ extended: true }));
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ecam@2021",
    database: "MVC_TP_1",
});
connection.connect((error) => {
    console.log(error);
});

app.set("views", "./view");
app.set("view engine", "ejs");



app.get("/login", (req, res) => { res.send("login page") }) // routes

app.get("/", (req, res) => { res.send("hello world") })  //routes

app.get("/home", (req, res) => {
    connection.query("SELECT * FROM user ;", function (error, result) {
        if (error) {
            console.log(error)
        }
        console.log(result)

    })
    res.send("hello world")
    
}) //routes

app.get("/register", (req, res) => { res.render("register.ejs") }) //routes





app.listen(5000, function () {
    console.log(" le port ")
})


