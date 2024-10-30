import { FastifyInstance } from "fastify";

import payableControllers from "../controllers/payable.controller"


export const payableRoutes = (app: FastifyInstance) => {
    app.post('/integrations/payable', payableControllers.payableCreate)
    app.get('/integrations/payable/', payableControllers.payableFind)
    app.put('/integrations/payable/update/', payableControllers.payableUpdate)
}
