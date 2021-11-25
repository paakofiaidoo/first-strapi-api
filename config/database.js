module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'postgres',
        host: env('DATABASE_HOST', process.env.POSTGRES_HOST),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', process.env.POSTGRES_DB),
        username: env('DATABASE_USERNAME', process.env.POSTGRES_USER),
        password: env('DATABASE_PASSWORD', `${process.env.POSTGRES_PASSWORD}`)
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

console.log(`password:${process.env.POSTGRES_HOST}`, process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD);