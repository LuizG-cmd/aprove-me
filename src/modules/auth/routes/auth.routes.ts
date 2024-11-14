import authController from "../controllers/auth.controller";

import { FastifyInstance } from "fastify";

export const authRoutes = (app: FastifyInstance) => {
    app.post("/integrations/auth", authController.authAssignor)
}