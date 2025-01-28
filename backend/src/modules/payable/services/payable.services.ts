import prismaRepositorie from "../../../lib/prisma";


const payableCreateService = async (value: number, emissionDate: Date, assignorId: string) => {
    const result = await prismaRepositorie.payable.create({
        data: {
          value,
          emissionDate,
          assignorId
        },
      });

      return result 
}

const findPayableService = async (id: string) => {
    const result = await prismaRepositorie.payable.findFirst({
        where: {
            id
        }
    })

    return result
}

const updatePayableCreateService = (id: string, value?: number, emissionDate?: Date) => {
    const result = prismaRepositorie.payable.update({
        where: {
          id,
        },
        data: {
          value,
          emissionDate
        },
      });

      return result
}

const allPayables = () => {
    const result = prismaRepositorie.payable.findMany()

    return result
}

export default{
    payableCreateService,
    findPayableService,
    updatePayableCreateService,
    allPayables
}

