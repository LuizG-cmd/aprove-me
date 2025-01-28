import { z } from 'zod'


const assignorSchema = z.object({
        document: z.string().max(30),
        email: z.string().max(140),
        phone: z.string().min(8).max(20),
        name: z.string().max(140)
}).required()


export type Assignor = z.infer<typeof assignorSchema>

export default assignorSchema
