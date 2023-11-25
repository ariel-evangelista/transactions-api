import { FastifyRequest } from 'fastify'

export async function logs(request: FastifyRequest) {
  console.log(`[${request.method}] ${request.url}`)
}
