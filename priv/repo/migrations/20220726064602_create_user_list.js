/*
 * @LastEditors: Necfol
 * @Date: 2022-07-26 15:35:10
 * @LastEditTime: 2022-07-26 15:48:27
 * @FilePath: /mercado-backend/priv/repo/migrations/20220530064602_create_user_list.js
 */

exports.up = async function(knex) {
  await knex.schema
    .createTable('user_list', table => {
      table.increments('id').primary();

      table.string('user_name');
      table.string('user_password');
      table.string('avatar');
    });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('user_list');
};
