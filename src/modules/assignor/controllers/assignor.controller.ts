import prismaRepositorie from "../../../lib/prisma";

import { FastifyReply, FastifyRequest } from "fastify";

import assignorSchema from "../dtos/assignor.dto";



const assignorCreate = async (request: FastifyRequest, reply: FastifyReply) => {


      const {document, email, phone, name} = assignorSchema.parse(request.body)
    
      if(!document)
      {
        reply.status(400).send({
          message: "Preencha um documento"
        })
      }
    
      if(!email){
        reply.status(400).send({
          message: "Preencha o e-mail"
        })
      }
    
      if(!phone){
        reply.status(400).send({
          message: "Preencha o telefone"
        })
      }
    
      if(!name){
        reply.status(400).send({
          message: "Preencha o nome"
        })
      }
    
      const result = await prismaRepositorie.assignor.create({
        data:{
          document,
          email,
          phone,
          name
        }
      })
    
      reply.status(200).send({
        message: "Assignor created successfully", 
         assignorID: result.id
      })
}

const assignorFind = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.query as {
        id: string
    }

    const result = await prismaRepositorie.assignor.findFirst({
        where:{
            id
        }  
    })


    if (!result){
        reply.status(400).send({
          message: "Id not found"
        })
      }
    
      reply.status(200).send({
        payable:{
          result
        }
      })
}

const assignorUpdate = async (request: FastifyRequest, reply: FastifyReply) =>{
  const { id } = request.query as { id: string }

  const { document, email, phone, name } = request.body as {
    document?: string,
    email?: string,
    phone?: string,
    name?: string
  }


  const assignorFinded = await prismaRepositorie.assignor.update({
    where:{
      id
    },
    data:{
      document,
      email,
      phone,
      name
    }
  })


  reply.send({message:
    "Payable altered successfull", assignorFinded})
}

export default {
    assignorCreate,
    assignorFind,
    assignorUpdate
}