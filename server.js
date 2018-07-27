const express = require('express');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Routes
app.get('/', (req, res) => res.send('hello'));
app.use('/api/users', users);
//app.use('/api/users', profile);
//app.use('/api/users', posts);

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));