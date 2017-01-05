// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'power-rank-dev',
      host: 'localhost'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'power-rank-test',
      host: 'localhost'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
