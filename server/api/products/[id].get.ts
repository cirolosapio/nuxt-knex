interface Product {
  id: number
  name: string
  price: number
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const product = await knex()<Product>('products')
    .where('id', id)
    .first()
  if (product) return product
  return event.respondWith(new Response('Not found', { status: 404 }))
})
