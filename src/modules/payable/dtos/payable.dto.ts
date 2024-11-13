import { z } from 'zod'


const payableSchema = z.object({
        value: z.number(),
        simpledate: z.string(),
        assignorId: z.string()
}).required()

export default payableSchema