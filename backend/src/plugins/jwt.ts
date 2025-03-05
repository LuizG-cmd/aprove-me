import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import fp from "fastify-plugin"

import fastifyJwt from "@fastify/jwt";


declare module 'fastify' {
  interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
      createtoken: (login: string, password: string) => Promise<string>
  }
}

const JWT_SECRET = process.env.JWT_SECRET_KEY || "SUPERSECRET"

const jwtPlugin = async (app: FastifyInstance) => {

    app.register(fastifyJwt,{
        secret: JWT_SECRET 
      })

      app.decorate('createtoken', async (login: string, password: string) => {
        const token = app.jwt.sign(
          {
            object: 
            login,
            password,
          },
          {
            expiresIn: '24h',
          }
        );
        return token;
      });


    app.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
 
        const result =  await request.jwtVerify()


    })
} 

export default fp(jwtPlugin, '5.x')
