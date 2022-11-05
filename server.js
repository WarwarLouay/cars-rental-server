const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 4260

app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`server running at ${port}`));