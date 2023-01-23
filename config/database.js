module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cf6avrcgqg47vk04secg-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "guitarla_f0od"),
      user: env("DATABASE_USERNAME", "guitarla_f0od_user"),
      password: env("DATABASE_PASSWORD", "IWzqS4tSpw1oQe1DY8NujyidCI282tdQ"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
