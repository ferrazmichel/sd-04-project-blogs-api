require('dotenv').config;
const express = require('express');
const UsersController = require('./controllers/UsersController');
const LoginController = require('./controllers/LoginController');
const PostsController = require('./controllers/PostsController');

const app = express();
const PORT = process.env.PORT

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', UsersController);
app.use('/login', LoginController);
app.use('/post', PostsController);

app.listen(PORT, () => console.log(`ouvindo porta ${ PORT }!`));
