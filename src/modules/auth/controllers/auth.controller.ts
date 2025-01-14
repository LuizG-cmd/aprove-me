import { FastifyReply, FastifyRequest } from "fastify";
import prismaRepositorie from "../../../lib/prisma";

const authAssignor = async (request: FastifyRequest, reply: FastifyReply) => {
  const { login, password } = request.body as {
     login: string,
     password: string
  };

  const findUser = await prismaRepositorie.users.findMany({
     where:{
          login
     }
  })

  if (findUser !== undefined) {
    reply.status(400).send("Usuario não localizado");
  }

  reply.send(findUser);
};

const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { login, password } = request.body;

  const newUser = await prismaRepositorie.users.create({
    data: {
      login,
      password,
    },
  });
};

export default {
  authAssignor,
  createUser,
};
