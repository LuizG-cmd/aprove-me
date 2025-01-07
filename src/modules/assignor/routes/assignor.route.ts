import { FastifyInstance } from "fastify";

import assignorControllers from "../controllers/assignor.controller"


export const assignorRoutes = (app:FastifyInstance) => {
    app.post('/integrations/assignor', assignorControllers.assignorCreate)  
    app.get('/integrations/assignor/', assignorControllers.assignorFind)
    app.put('/integrations/assignor/update/', assignorControllers.assignorUpdate)
    app.get('/integrations/assignors', assignorControllers.allAssignors)
}