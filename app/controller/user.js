/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:35:15
 * @FilePath: /mercado-backend/app/controller/user.js
 */
const got = require('got');
const Controller = require('./core/base');


const UC_CURRENT_USER_API = 'https://uc.app.terminus.io/api/user/web/current-user';


class UserController extends Controller {
  async login() {
    const { username, password } = this.ctx.request.body;
    const info = await this.service.user.login(username, password);
    if (info) {
      const token = this.app.jwt.sign(
        {
          name: username
        },
        this.app.config.jwt.secret
      );
      this.success({ ...info, token }, '登陆成功');
    } else {
      this.fail('登陆失败，请查询用户名或密码是否正确');
    }
  }

  /**
   * GET /api/users/current
   */
  async currentUser() {
    const cookie = this.ctx.headers.cookie;
    const res = await got(UC_CURRENT_USER_API, { headers: { cookie } }).json();
    this.success(res.result);
  }
}

module.exports = UserController;
