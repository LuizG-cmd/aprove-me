import authController from "../controllers/auth.controller";

import { FastifyInstance } from "fastify";



export const authRoutes = (app: FastifyInstance) => {
    app.post("/integrations/login", {preHandler: app.authenticate}, authController.authUser)
    app.post("/integrations/register", {onResponse: app.createtoken}, authController.createUser)
}