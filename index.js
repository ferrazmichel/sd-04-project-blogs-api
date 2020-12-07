require('dotenv').config();
const express = require('express');

const { userRouter } = require('./routes');

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
