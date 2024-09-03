const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 30010;
const pathurl = path.join(__dirname, '/views');
const router = require('./router/router');
const bodyParser = require('body-parser');
const mongoose = require('./config/db')

app.set('view engine', 'ejs');
app.set('views', pathurl);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(pathurl));

app.use ('/',router)

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running on ${PORT}`);
    }
});
