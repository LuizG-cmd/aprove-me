import fastify from 'fastify'

import  { payableRoutes }  from './modules/payable/routes/payable.route'
import  { assignorRoutes } from "./modules/assignor/routes/assignor.route"
import  { authRoutes } from './modules/auth/routes/auth.routes'
import jwtPlugin from './plugins/jwt'

import errorhandler from './plugins/errorhandler'


const app = fastify({
    logger: true
})


app.register(jwtPlugin)
app.register(authRoutes)
app.register(payableRoutes)
app.register(assignorRoutes)
app.register(errorhandler)
  

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})