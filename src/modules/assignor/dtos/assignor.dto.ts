import { z } from 'zod'


const assignorSchema = z.object({
        document: z.string().max(30),
        email: z.string().max(140),
        phone: z.string().max(20),
        name: z.string().max(140),
        value: z.number().max(15),
})

export default assignorSchema
