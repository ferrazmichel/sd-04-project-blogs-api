const express = require('express');

const router = require('./router');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', router.userRouter);
app.use('/login', router.loginRouter);
app.use('/post', router.postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
