import { Queue, Worker } from 'bullmq';
import { FastifyRequest, FastifyReply } from 'fastify';
import batchServices from '../services/batch.services';

const processbatch = async (request: FastifyRequest, reply: FastifyReply) =>{

    const payables = request.body as []

    /*const jsonsz = await batchServices.seriealizeJSON(payables)*/

    const jsonzin = batchServices.processJsonBatch(payables)

    reply.send(jsonzin)

}
    

export default {
    processbatch
}





  
 



