const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({
    path: "config.env"
});
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyparser.urlencoded({
    extended: true
}));

//view engine
app.set("view engine", "ejs");
app.use("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use("/css", expree.static(path.resolve(__dirname, "assets/css")));
app.use("/img", expree.static(path.resolve(__dirname, "assets/img")));
app.use("/js", expree.static(path.resolve(__dirname, "assets/js")));


app.get("/", (req, res) => {
    res.send("mawimbi seafood application");
});

app.listen(PORT, () => console.log(`server started runniing on port ${PORT}`));