'use strict'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return {
      message: 'Fastify API is on fire',
    }
  })
}

export default routes
