import { z } from 'zod'


const payableUpdateSchema = z.object({
        value: z.number().optional(),
        simpledate: z.date().optional(),
        assignorId: z.string().optional()
}).required()

export default payableUpdateSchema