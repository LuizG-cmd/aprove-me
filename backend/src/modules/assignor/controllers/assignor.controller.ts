import prismaRepositorie from "../../../lib/prisma";

import { FastifyReply, FastifyRequest, FastifySchema } from "fastify";

import assignorCreateSchema, { Assignor } from "../dtos/assignor.dto";

import assignorServices from "../services/assignor.services";

interface User {
  document: string,
  email: string,
  phone: string,
  name: string
}


const assignorCreate = async (request: FastifyRequest, reply: FastifyReply) => {


      const {document, email, phone, name} = assignorCreateSchema.parse(request.body)
    
      if(Object.keys(request.body).length === 0){
        reply.status(400).send({
        message:"Os campos nao podem ser nulos"
      })
    }
    
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
    
      /*const result = await prismaRepositorie.assignor.create({
        data:{
          document,
          email,
          phone,
          name
        }
      })*/

      const result = await assignorServices.assignorCreateService(name, email, phone, document)
    
      reply.status(200).send({
        message: "Assignor created successfully", 
         assignorID: result.id
      })
}

const assignorFind = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as {
        id: string
    }

    if (!id){
      reply.status(400).send({
        message:"not type id"
      })
    }

    const result = await assignorServices.assignorFindService(id)


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

const assignorUpdate = async (request: FastifyRequest, reply: FastifyReply) =>{
  const { id } = request.query as { id: string }

  const { document, email, phone, name } = request.body as {
    document?: string,
    email?: string,
    phone?: string,
    name?: string
  }

 
  if(Object.values(request.body).length === 0){
      reply.status(400).send({
      message:"Os campos nao podem ser nulos"
    })
  }

  if(!id){
    reply.status(400).send({
      message: "Id not type"
    })
}


  /*const assignorFinded = await prismaRepositorie.assignor.update({
    where:{
      id
    },
    data:{
      document,
      email,
      phone,
      name
    }
  })*/

    const assignorFinded = await assignorServices.assignorUpdateService(id, name, document, phone, email)


  reply.send({
    message:
    "Assignor altered successfull", assignorFinded
  })
}

const allAssignors = async (request: FastifyRequest, reply: FastifyReply) => {
  const result = await assignorServices.allAssignorsService()

  reply.status(200).send({
    assignors:{
      result
    } 
  })
}

export default {
    assignorCreate,
    assignorFind,
    assignorUpdate,
    allAssignors
}