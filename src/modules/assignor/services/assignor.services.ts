import prismaRepositorie from "../../../lib/prisma";


const assignorCreateService = async (document: string, email: string, phone: string, name: string) => {

        const result = prismaRepositorie.assignor.create({
            data:{
                document,
                email,
                name,
                phone
            }
        })

      return result
}

const assignorFindService = async (id: string) =>{
    const result = await prismaRepositorie.assignor.findFirst({
        where:{
            id
        }
    })

    return result
}

const assignorUpdateService = async (id: string, document: string, email: string, phone: string, name: string ) =>{
    const result = await prismaRepositorie.assignor.update({
        where: id,
        data:{
            document,
            email,
            phone,
            name
        }
    })

    return result
}

const allAssignorsService = async () =>{
    const result = await prismaRepositorie.assignor.findMany()

    return result
}

export default {
    assignorCreateService,
    assignorFindService,
    assignorUpdateService,
    allAssignorsService
}