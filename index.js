const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const controllers = require('./controllers');

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', controllers.users);
app.use('/login', controllers.login);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
