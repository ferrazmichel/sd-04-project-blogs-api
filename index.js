const express = require('express');
const { usersController, loginController, postsController } = require('./controllers');

const app = express();
app.use(express.json());

const PORT = process.env.PORT ?? 3000;

app.use('/login', loginController);
app.use('/user', usersController);
app.use('/post', postsController);

app.listen(PORT, () => console.log(`listenig at localhost:${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
