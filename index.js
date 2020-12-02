const express = require('express');

const app = express();

const userRouter = require('./routers/userRouters');

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
