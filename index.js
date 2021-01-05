const express = require('express');

const app = express();

const router = require('./router.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(router);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
