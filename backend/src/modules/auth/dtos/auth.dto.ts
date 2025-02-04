import { z } from 'zod'


const userSchema = z.object({
    login: z.string(),
    password: z.string()
})

export default userSchema