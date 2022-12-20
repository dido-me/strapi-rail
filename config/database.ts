export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-167.railway.app'),
      port: env.int('DATABASE_PORT', 5623),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'U8u7jafsx5uSv3x7nrc4'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
