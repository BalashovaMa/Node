const express = require('express');

const app = express();

const firstHandler = (req, res) => res.send('Response from Express');
const secondHandler = (req, res, next) => {
    console.log('Second handler');
    next();
}

app.get('/', secondHandler, firstHandler)

app.listen(5000, () => console.log('Server was started on port 5000'))
