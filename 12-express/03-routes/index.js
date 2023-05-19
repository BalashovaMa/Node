const express = require('express');

const app = express();

const getRootHandler = (req, res) => res.send('Get root rout');
const getCommentsHadler = (req, res) => res.send('Get comments route')
const postCommentsHandler = (req, res) => res.send('Post comments route')


app.get('/', getRootHandler)
app.get('/comments', getCommentsHadler)
app.post('/comments', postCommentsHandler)

app.listen(3000, () => console.log('Server was started on port 5000'))