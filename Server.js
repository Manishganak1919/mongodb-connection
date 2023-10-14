/*** CREATE AN EXPRESS SERVER **/
const express = require('express');
const connectDB = require('./config/dbConnection.js');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleWare/errorHandler.js');
connectDB();


const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
// apply a inbuilt middleware
app.use(express.json());
app.use("/api", contactRoutes);
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`server is running on Port no ${PORT}`);
});
