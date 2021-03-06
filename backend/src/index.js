const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// MongoDB (Não-relacional)
// Conexão com o banco de dados mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack1234@cluster0-dobcb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
