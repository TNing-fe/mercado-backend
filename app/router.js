/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:34:14
 * @FilePath: /mercado-backend/app/router.js
 */
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller
    //  jwt
  } = app;
  // 用户相关路由
  router.post('/api/login', controller.user.login);
  router.get('/api/users/current', controller.user.currentUser);
  // router.post('/api/logout', controller.user.logout);
};
