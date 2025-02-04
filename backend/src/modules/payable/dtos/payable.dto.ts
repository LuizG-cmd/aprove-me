import { z } from 'zod'


const payableCreateSchema = z.object({
        value: z.number(),
        simpledate: z.string(),
        assignorId: z.string()
}).required()

export type Payable = z.infer<typeof payableCreateSchema>;

export default payableCreateSchema