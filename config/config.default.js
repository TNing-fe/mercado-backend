/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:46:46
 * @LastEditTime: 2022-07-26 17:32:06
 * @FilePath: /mercado-backend/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_tfe20220726';

  // add your middleware config here
  config.middleware = [];

  // 跨域配置
  config.security = {
    // 关闭csrf
    csrf: {
      enable: false // 这里不进行开启操作，日后配置鉴权
    },
    // 跨域白名单
    domainWhiteList: ['http://localhost']
  };
  config.jwt = {
    secret: 'tfe20220726'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
