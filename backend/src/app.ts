import fastify, { FastifyInstance, FastifyServerOptions } from "fastify"

import  { payableRoutes }  from './modules/payable/routes/payable.route'
import  { assignorRoutes } from "./modules/assignor/routes/assignor.route"
import  { authRoutes } from './modules/auth/routes/auth.routes'
import jwtPlugin from './plugins/jwt'

const build = (/*opts: FastifyServerOptions*/) => {
    const app = fastify({
        logger: true
    })

    app.register(jwtPlugin)
    app.register(authRoutes)
    app.register(payableRoutes)
    app.register(assignorRoutes)

    return app

}

export default build