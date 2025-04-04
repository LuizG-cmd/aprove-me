import { Queue, Worker } from "bullmq";

import prismaRepositorie from "../../../lib/prisma";

const connection = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

const queue = new Queue("taskQueue");

const processJsonBatch = (payables: []) => {
  
    queue.add(
      "process-payable",
      { data: payables },
      { removeOnComplete: true }
    );
    console.log(typeof payables);
  }

 const myfirstWorker = new Worker(
    "taskQueue",
     (job) => {

      /*const filterPayable = sanitizePayable(job.data)

      const saveBatchPayables = prismaRepositorie.payable.create({
        data: filterPayable
      })

      return saveBatchPayables*/

      console.log(`${job.id}`);
    },
    { connection }
  );

  myfirstWorker.on("completed", (job) => {
    console.log(`${job.id} has completed!`);
  });

  myfirstWorker.on("failed", (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
  });

  /*const sanitizePayable = (filterPayable: []) =>{
        const arratzinh = filterPayable.find((payable)=>{
          return payable.value
        })
    })
  }
*/

export default {
  processJsonBatch,
};
