import { z } from 'zod'


const assignorCreateSchema = z.object({
        document: z.string().max(30),
        email: z.string().max(140),
        phone: z.string().min(8).max(20),
        name: z.string().max(140)
}).required()


export type AssignorCreateType = z.infer<typeof assignorCreateSchema>

export type Assignor = z.infer<typeof assignorCreateSchema>




export default assignorCreateSchema
