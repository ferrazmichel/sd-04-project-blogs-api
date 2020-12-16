const express = require('express');

const app = express();

const router = require('./router.js');

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('oie!');
});

app.use('/user', router);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
