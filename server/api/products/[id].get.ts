interface Product {
  id: number
  name: string
  price: number
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const db = knex()
  const product = await db<Product>('products').where('id', id).first()
  return product ?? event.respondWith(new Response('Not found', { status: 404 }))
})
