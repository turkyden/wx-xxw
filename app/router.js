'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);
  router.resources('posts', '/api/posts', controller.posts);
  //router.resources('users', '/api/v1/users', controller.v1.users);
};
