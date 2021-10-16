// Rafael Clarindo - Teste Inicie Educação

const express = require('express');
const cors = require('cors');
const app = express();
require('./src/Routes/index')(app);


app.use(cors());
app.use(express.json());
app.listen(80);