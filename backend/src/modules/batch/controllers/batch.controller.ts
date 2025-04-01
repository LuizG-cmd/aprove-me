import { Queue, Worker } from 'bullmq';
import { FastifyRequest, FastifyReply } from 'fastify';
import IORedis from 'ioredis';


const connection = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
};
    
const queue = new Queue('taskQueue');


const processbatch = async (request: FastifyRequest, reply: FastifyReply) =>{

    const payables = request.body as []

    const addJobs = async (payables: []) => {

        for (const payable of payables){
          await queue.add('process-payable', { message: payables });
          console.log('Job adicionado à fila!');
        }
        
    }

    const result = await addJobs(payables)

    if(!result){
        reply.status(200).send({result})
    }else{
        reply.send({payables})
    }

   

}
    

const myfirstWorker = new Worker('taskQueue', async job => {
   console.log(job.data)
}, {connection})

myfirstWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
  });
  
myfirstWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
  });
    
export default {
    processbatch
}





  
 



