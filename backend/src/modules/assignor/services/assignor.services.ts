import prismaRepositorie from "../../../lib/prisma";
import { Assignor } from "../dtos/assignor.dto";
import assignorSchema from "../dtos/assignor.dto";


const assignorCreateService = async (assignorBody: Assignor): Promise<Assignor> => {

        const result = prismaRepositorie.assignor.create({
            data:
            assignorBody
        })

      return result
}

const assignorFindService = async (id: string): Promise<Assignor> =>{
    const result = await prismaRepositorie.assignor.findFirst({
        where:{
            id
        }
    })

    if(!result){
        throw new Error("Not find Assignor")
    }

    return result
}

const assignorUpdateService = async (id: string, document: string, email: string, phone: string, name: string ) =>{

    console.log(id)


    const result = await prismaRepositorie.assignor.update({
        where:{id} ,
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