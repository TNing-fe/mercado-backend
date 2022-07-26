/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:31:55
 * @FilePath: /mercado-backend/config/plugin.js
 */
/** @type Egg.EggPlugin */
module.exports = {
  // 启用Mysql数据插件
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  // 开启跨域
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
