import prismaRepositorie from "../../../lib/prisma";


const registerUser = async (login: string, password: string) => {

    const newUser = await prismaRepositorie.users.create({
        data:{
            login,
            password
        }
    })

    return newUser

}


const loginUser = async (login: string, password: string) => {

    const authenticatedUser = await prismaRepositorie.users.findFirst({
        where : {
         login
        }
    })

    /*if(authenticatedUser === undefined && null) {
      throw new Error("User not found")
    }*/

    if(authenticatedUser?.password !== password){
        throw ("Incorrect Credentials")
    }

    return authenticatedUser
 
}



export default {
    registerUser,
    loginUser
}