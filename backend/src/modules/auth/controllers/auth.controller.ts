import { FastifyReply, FastifyRequest } from "fastify";

import userService from "../services/auth.service";

import userSchema from "../dtos/auth.dto";


const createUser = async (request: FastifyRequest, reply: FastifyReply) => {

  const { login, password } = userSchema.parse(request.body);

  const newUser = await userService.registerUser(login, password)

  const token = await request.server.createtoken(login,password)

  reply.send({
    token: token
  })

  if (!newUser){
    reply.send({
      message: "Not create user",
    })
  }

};

const authUser = async (request: FastifyRequest, reply: FastifyReply) => {

  const { login, password } = request.body as {
     login: string,
     password: string
  };

  const findUser = await userService.loginUser(login, password)

  /*if (findUser !== undefined) {
    reply.status(400).send("Usuario não localizado");
  }*/

  reply.send({
    user:{
      id: findUser.id,
      name: findUser.login
    }
  })

};


export default {
  authUser,
  createUser,
};
