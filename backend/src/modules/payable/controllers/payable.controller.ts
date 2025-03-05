import prismaRepositorie from "../../../lib/prisma";

import { FastifyRequest, FastifyReply } from "fastify";

import payableSchema from "../dtos/payable.dto";

import payableUpdateSchema from "../dtos/update.payable.dto";

import payableServices from "../services/payable.services";

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
  } 


  const result = await payableServices.payableCreateService(value, emissionDate, assignorId)

    reply.send({
      result,
    });
  
};

const payableFind = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };

  const result = await payableServices.findPayableService(id)

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
  const { id } = payableUpdateSchema.parse(request.query) 

  const { value } = payableUpdateSchema.parse(request.body) 
 
  if(!id){
    reply.status(400).send({
      message:"Id not type"
    })
  }

  const payableFinded = await payableServices.updatePayableCreateService(id, value)

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
