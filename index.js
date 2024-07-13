import express from "express";
import hbs from "hbs";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT||4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("ind")
})
app.listen(port, (req, res) => {
    console.log(`connected to ${port} `)
})