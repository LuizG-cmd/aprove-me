import { FastifyInstance } from "fastify";

import assignorControllers from "../controllers/assignor.controller"

import { FromSchema } from "json-schema-to-ts"


export const assignorRoutes = (app:FastifyInstance) => {
    app.post('/integrations/assignor', assignorControllers.assignorCreate)  
    app.get('/integrations/assignor/', assignorControllers.assignorFind)
    app.put('/integrations/assignor/update/', assignorControllers.assignorUpdate)
}