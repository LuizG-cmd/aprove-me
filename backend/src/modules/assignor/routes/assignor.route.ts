import { FastifyInstance } from "fastify";

import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

import assignorControllers from "../controllers/assignor.controller"

import assignorSchema from "../dtos/assignor.dto";
import errorhandler from "../../../plugins/errorhandler";


import { Assignor } from "../dtos/assignor.dto";


export const assignorRoutes = (app:FastifyInstance) => {

    /*app.withTypeProvider<ZodTypeProvider>().route({
        method:"POST",
        url:"/integrations/assignor",
        handler: assignorControllers.assignorCreate
    })*/
    app.post<{Body: Assignor}>('/integrations/assignor', assignorControllers.assignorCreate)
    app.get('/integrations/assignor/:id', assignorControllers.assignorFind)
    app.put('/integrations/assignor/update/', assignorControllers.assignorUpdate)
    app.get('/integrations/assignors', assignorControllers.allAssignors)
}