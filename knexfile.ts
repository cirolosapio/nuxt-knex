import type { Knex } from 'knex'
import 'dotenv/config'

export default {
  development: {
    client: 'pg',
    connection: {
      host: process.env.NUXT_HOST,
      database: process.env.NUXT_DATABASE,
      user: process.env.NUXT_USER,
      password: process.env.NUXT_PASSWORD
    },
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }
  }
} as { [key: string]: Knex.Config }
