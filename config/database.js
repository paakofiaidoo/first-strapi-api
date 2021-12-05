const parse = require("pg-connection-string").parse;
const config = parse(process.env.POSTGRES_URL)

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        useNullAsDefault: true,
        debug: true,
        pool: {
          min: 0,
          max: 4,
        },
      },
    },
  },
});