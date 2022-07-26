/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:32:00
 * @FilePath: /mercado-backend/config/config.prod.js
 */
const dbconfig = require('./db');

// 开发环境下数据库连接
module.exports = {
  mysql: {
    // 单数据库信息配置
    client: {
      ...dbconfig.production
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  }
};
