const dbconfig = require('../../config/db');


module.exports = {
  development: {
    client: 'mysql',
    connection: {
      ...dbconfig.development
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      ...dbconfig.production
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

