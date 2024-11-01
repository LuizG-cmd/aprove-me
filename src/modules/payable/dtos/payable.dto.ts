import { z } from 'zod'


const payableSchema = z.object({
        value: z.number(),
        simpledate: z.string()
})

export default payableSchema