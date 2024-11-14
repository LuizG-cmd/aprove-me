import fastify from 'fastify'

import  { payableRoutes }  from './modules/payable/routes/payable.route'
import  { assignorRoutes } from "./modules/assignor/routes/assignor.route"
import  { authRoutes } from './modules/auth/routes/auth.routes'

const app = fastify({
    logger: true
})

app.register(authRoutes)
app.register(payableRoutes)
app.register(assignorRoutes)
  

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})