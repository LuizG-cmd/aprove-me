import { FastifyInstance } from "fastify";

import batchController from "../controllers/batch.controller";


export const batchRoutes = (app: FastifyInstance) =>{
    app.post('/batch', batchController.processbatch)
}
