const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let ejs = require('ejs')

const app = express();

const PORT = 5000;

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use("/", express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})