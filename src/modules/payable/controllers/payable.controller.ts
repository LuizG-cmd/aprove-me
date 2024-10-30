import prismaRepositorie from "../../../lib/prisma"

import { FastifyRequest, FastifyReply } from "fastify"

import payableSchema from "../dtos/payable.dto"

const payableCreate = async (request: FastifyRequest, reply: FastifyReply) => {

    const {value} = payableSchema.parse(request.body)
  
    if(!value)
    {
      reply.status(400).send({
        message: "Preencha o valor"
      })
    }else{
      const result = await prismaRepositorie.payable.create({
        data:{
          value
          }
      })
    }
}

const payableFind =  async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.query as { id: string }


  const result = await prismaRepositorie.payable.findMany({
    where:{
      id: id
    }
  })

  if (!result){
    reply.status(400).send({
      message: "Id not found"
    })
  }

  reply.status(200).send({
    assignor:{
      result
    }
  })

}

const payableUpdate = async (request: FastifyRequest, reply: FastifyReply) => {

  const { id } = request.query as { id: string }

  const { value } = request.body as {
    value?: number
  }


  const payableFinded = await prismaRepositorie.payable.update({
    where:{
      id
    },
    data:{
      value
    }
  })


  reply.send({message:
    "Payable altered successfull", payableFinded})

}

  export default {
    payableCreate,
    payableFind,
    payableUpdate
  }