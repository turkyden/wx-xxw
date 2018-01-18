'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //首页访问
  router.get('/', controller.home.index);
  //调用服务获取用户信息
  router.get('/user/:id', controller.user.info);
  //Restful风格api接口开发
  router.resources('posts', '/api/posts', controller.posts);
  //router.resources('users', '/api/v1/users', controller.v1.users);
};
