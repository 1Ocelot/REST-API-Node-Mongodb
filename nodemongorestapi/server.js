require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database.'))

app.use(express.json())

const recipesRouter = require('./routes/recipes');
app.use('/recipes', recipesRouter);

const PORT = 3000;
app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
