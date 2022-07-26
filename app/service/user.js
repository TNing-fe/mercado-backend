/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:34:57
 * @FilePath: /mercado-backend/app/service/user.js
 */
const Service = require('egg').Service;

class UserService extends Service {
  async login(name, password) {
    try {
      const user = await this.app.mysql.select('user_list', {
        where: { user_name: name, user_password: password }
      });
      // 判断用户是否存在
      if (!user || !user.length) {
        return null;
      }
      // 存在返回个人信息
      return {
        id: user[0].id,
        name: user[0].user_name,
        avatar: user[0].avatar
      };
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;

      return null;
    }
  }
}

module.exports = UserService;
