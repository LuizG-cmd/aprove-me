import { FastifyInstance, FastifyRequest, FastifyReply, FastifyError } from "fastify";

import { serializerCompiler, validatorCompiler, hasZodFastifySchemaValidationErrors, isResponseSerializationError } from 'fastify-type-provider-zod'

import fp from "fastify-plugin"

const errorHandler = (app: FastifyInstance) =>{

    app.setValidatorCompiler(validatorCompiler)
    app.setSerializerCompiler(serializerCompiler)

    app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
        if (hasZodFastifySchemaValidationErrors(error)) {
            return reply.code(400).send({
                error: 'Response Validation Error',
                message: "Request doesn't match the schema",
                statusCode: 400,
                details: {
                    issues: error.validation,
                    method: request.method,
                    url: request.url,
                },
            })
        }


        if (isResponseSerializationError(error)) {
            return reply.code(500).send({
                error: 'Internal Server Error',
                message: "Response doesn't match the schema",
                statusCode: 500,
                details: {
                    issues: error.cause.issues,
                    method: error.method,
                    url: error.url,
                },
            })
        }
    }
 )}


 export default fp(errorHandler, '5.x')


