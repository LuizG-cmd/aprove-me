import prismaRepositorie from "../../../lib/prisma";

import { FastifyRequest, FastifyReply } from "fastify";

import payableSchema from "../dtos/payable.dto";

const payableCreate = async (request: FastifyRequest, reply: FastifyReply) => {
  const { value, simpledate, assignorId } = payableSchema.parse(request.body);

  const formatdate = async (simpledate: string) => {
    const newdate = new Date(simpledate);
    return newdate;
  };

  const emissionDate = await formatdate(simpledate);

  console.log(emissionDate)

  if (!value) {
    reply.status(400).send({
      message: "Preencha o valor",
    });
  } else {
    const result = await prismaRepositorie.payable.create({
      data: {
        value,
        emissionDate,
        assignorId
      },
    });

    reply.send({
      result,
    });
  }
};

const payableFind = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.query as { id: string };

  const result = await prismaRepositorie.payable.findMany({
    where: {
      id: id,
    },
  });

  if (!result) {
    reply.status(400).send({
      message: "Id not found",
    });
  }

  reply.status(200).send({
    assignor: {
      result,
    },
  });
};

const payableUpdate = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.query as { id: string };

  const { value } = request.body as {
    value?: number;
  };

  const payableFinded = await prismaRepositorie.payable.update({
    where: {
      id,
    },
    data: {
      value,
    },
  });

  reply.send({ message: "Payable altered successfull", payableFinded });
};

const allPayables = async (request: FastifyRequest, reply: FastifyReply) => {
  const payables = await prismaRepositorie.payable.findMany()

  reply.status(200).send({
    Dividas:{
      payables
    }
  })
}


export default {
  payableCreate,
  payableFind,
  payableUpdate,
  allPayables
};
