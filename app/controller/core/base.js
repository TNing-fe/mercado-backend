/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 17:32:35
 * @FilePath: /mercado-backend/app/controller/core/base.js
 */
const Controller = require('egg').Controller;

class BaseController extends Controller {
  /**
   * 请求成功
   * @param {any} data 返回的数据
   * @param {string} msg 成功信息
   * @returns {}
   */

  success(data, msg = '请求成功') {
    this.ctx.code = 200;
    this.ctx.body = {
      code: this.ctx.code,
      msg,
      data
    };
  }

  /**
   * 请求失败
   * @param {string} errMsg 错误信息
   * @returns {Object} {}
   */

  fail(errMsg = this.ctx.errMsg) {
    this.ctx.code = 500;
    this.ctx.body = {
      code: this.ctx.code,
      msg: errMsg
    };
  }
}

module.exports = BaseController;
