import type { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del()
    await knex("products").insert([
        { price: 10, name: "iPhone" },
        { price: 20, name: "Samsung" },
        { price: 30, name: "Asus" }
    ])
}
