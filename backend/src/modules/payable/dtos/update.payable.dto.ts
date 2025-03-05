import { z } from 'zod'


const payableUpdateSchema = z.object({
        id: z.string().optional(),
        value: z.number().optional(),
        simpledate: z.date().optional(),
        assignorId: z.string().optional()
})


export default payableUpdateSchema