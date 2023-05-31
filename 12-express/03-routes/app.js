const express = require('express');
const commentsRouter = require('./routes/comments')

const app = express();

const getRootHandler = (req, res) => res.send('Get root route')




app.use('/comments', commentsRouter)
app.get('/', getRootHandler)


app.listen(3000, () => console.log('Server was started on port 5000'))