const { Router } = require('express');
const { postsController } = require('../controllers');
const middleware = require('../middlewares');

const postsRouter = Router();

postsRouter
  .get('/', middleware.authJWT, postsController.getAllPostsCont)
  .post('/', middleware.authJWT, middleware.validateCreatePost, postsController.createPostsCont)
  .get('/:id', middleware.authJWT, postsController.getPostByIdCont);

module.exports = {
  postsRouter,
};
