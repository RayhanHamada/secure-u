import type { SwaggerOptions } from '@fastify/swagger';

const info = {
  title: 'Secure-U REST API',
  version: '0.0.1',
  description: 'REST API Service for Secure-U',
};

export const swaggerConfig: SwaggerOptions = {
  routePrefix: '/',
  swagger: {
    info,
    consumes: ['application/json'],
    produces: ['application/json'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      authorization: {
        type: 'apiKey',
        in: 'header',
        name: 'authorization',
        description: 'JWT Token as bearer token in form of Bearer {jwt_token}',
      },
    },
    security: [
      {
        authorization: [],
      },
    ],
  },
};
