import knex from 'knex'

export default function () {
  const { host, database, user, password } = useRuntimeConfig()

  return knex({
    client: 'pg',
    connection: {
      host,
      database,
      user,
      password
    }
  })
}
