const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');




require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected.');
})

const exercisesRouter = require('./routes/exercise');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);



app.listen(port, () => {
    console.log('Server running on port:' + port);
})