import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import { fastify } from 'fastify';
import { CORSConfig, JWTConfig, swaggerConfig } from './configs';
import { onReady } from './fastifyHooks';

const app = fastify({
  logger: true,
});

/**
 * register plugins
 */
app.register(cors, CORSConfig);
app.register(jwt, JWTConfig);
app.register(swagger, swaggerConfig);

/**
 * register hooks
 */
app.addHook('onReady', onReady);

export default app;
