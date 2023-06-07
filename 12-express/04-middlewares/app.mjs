import express from 'express';
import morgan from 'morgan';

const app = express();

/* const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}

app.use(logger); */

app.use(morgan('combined'));

app.use((req, res) => res.send('This is express server'));

app.listen(5000, () => console.log('server is listening at port 5000'));