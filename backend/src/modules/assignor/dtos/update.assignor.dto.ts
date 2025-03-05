import { z } from "zod"


const assignorUpdateSchema = z.object({
    document: z.string().max(30).optional(),
    email: z.string().max(140).optional(),
    phone: z.string().min(8).max(20).optional(),
    name: z.string().max(140).optional()
})

export type AssignorUpdate = z.infer<typeof assignorUpdateSchema>

export default assignorUpdateSchema


