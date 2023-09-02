import type { Knex } from "knex"
import 'dotenv/config'

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.NUXT_PG_HOST,
      database: process.env.NUXT_PG_DATABASE,
      user: process.env.NUXT_PG_USER,
      password: process.env.NUXT_PG_PASSWORD,
    },
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    },
  },
} as { [key: string]: Knex.Config } 
