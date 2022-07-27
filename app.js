const express = require("express");
require("./models/db")
const bodyparser = require("body-parser");


const app = express();



//parse request to body-parser
app.use(bodyparser.urlencoded({
    extended: true
}));


app.listen(3000, () => console.log(`server started runniing on port 3000`));