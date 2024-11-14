import { FastifyReply, FastifyRequest } from "fastify";


const authAssignor = async (request: FastifyRequest, reply: FastifyReply) => {
    const {login, password} = request.body


    if(login === "bankme" && password === "bankme"){
         reply.send("Token: 25dsadsa8446sadsadas4897")
    }
}

export default {
     authAssignor
}