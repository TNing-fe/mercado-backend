/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:32:03
 * @FilePath: /mercado-backend/config/config.local.js
 */
const dbconfig = require('./db');

module.exports = {
  mysql: {
    // 单数据库信息配置
    client: {
      ...dbconfig.development
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  },
  // 允许跨域的域名
  cors: {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
};
