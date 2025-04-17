const dotenv = require('dotenv'); // prefert to keep on top of code , it use for env environment
dotenv.config();
const cors = require('cors');
const express = require('express')
const cookieparser = require('cookie-parser')
const app = express();
const connectToDb = require('./DB/db') //import database connection from db folder

// const userRoute = require('./routes/user.routes');
const userRoute = require('../Backend/routes/user.routes');

const captainRoutes = require('../Backend/routes/captain.routes'); //import captain routes from captain.routes file


connectToDb(); // call this function to check databse connected or not
app.use(cors());
app.use(cookieparser())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))



app.use("/User", userRoute);
app.use("/captain", captainRoutes);







app.get('/', (req, res) => {
  res.send('Hello World!')
});



module.exports = app

