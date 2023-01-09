const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/shop-routes");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/tickets', router);
const rateLimit = require('express-rate-limit');
mongoose
   .connect(
    'mongodb+srv://Eman:12341234@ticketsystem.kaum5yg.mongodb.net/?retryWrites=true&w=majority', {
    // 'mongodb://localhost:27017', {
    }).then(()=>app.listen(5000)).then(()=>console.log('connected to database and listening to port 5000'))
.catch(((err)=> console.log(err)));


const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 24 hrs in milliseconds
    max: 1000,
    message: 'You have exceeded the 100 requests in 24 hrs limit!',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(rateLimit);
