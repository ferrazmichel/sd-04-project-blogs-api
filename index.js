const express = require('express');
const bodyParser = require('body-parser');
// const usersController = require('./controllers/usersController');
const controllers = require('./controllers');
const app = express();

app.use(express.json());
app.use('/user', controllers.usersController);
app.use('/login', controllers.loginController);

app.listen(3000, () => console.log('ouvindo na porta 3000!'));


// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
