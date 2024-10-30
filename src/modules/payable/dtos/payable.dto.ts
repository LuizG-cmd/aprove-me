import { z } from 'zod'


const payableSchema = z.object({
        value: z.number().max(30)
})

export default payableSchema