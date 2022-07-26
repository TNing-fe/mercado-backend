/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:46:46
 * @LastEditTime: 2022-07-26 17:27:45
 * @FilePath: /mercado-backend/config/db.js
 */
module.exports = {
  development: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'workspace-2'
  },
  production: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
};
