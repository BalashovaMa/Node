const express = require('express');
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users')

const app = express();

const getRootHandler = (req, res) => res.send('Get root route')




app.use('/comments', commentsRouter)
app.get('/', getRootHandler)
app.use('/users', usersRouter)


app.listen(3000, () => console.log('Server was started on port 3000'))