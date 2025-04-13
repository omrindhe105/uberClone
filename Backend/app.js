const dotenv = require('dotenv'); // prefert to keep on top of code , it use for env environment
dotenv.config();
const cors = require('cors');
const express = require('express')
const app = express();
const connectToDb = require('./DB/db') //import database connection from db folder

// const userRoute = require('./routes/user.routes');
const userRoute = require('../Backend/routes/user.routes')


connectToDb(); // call this function to check databse connected or not
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.use("/User", userRoute);







app.get('/', (req, res) => {
  res.send('Hello World!')
});



module.exports = app

