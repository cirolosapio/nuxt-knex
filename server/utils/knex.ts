import knex from 'knex'

export default function () {
  const runtimeConfig = useRuntimeConfig()

  return knex({
    client: 'pg',
    connection: {
      host: runtimeConfig.pgHost,
      database: runtimeConfig.pgDatabase,
      user: runtimeConfig.pgUser,
      password: runtimeConfig.pgPassword,
    },
  })
}