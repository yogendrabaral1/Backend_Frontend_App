const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//server port
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Database connection
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const routes = require('./routes');

app.use('/', routes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});