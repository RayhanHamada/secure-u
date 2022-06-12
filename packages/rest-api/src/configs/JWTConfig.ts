import type { FastifyJWTOptions } from '@fastify/jwt';
import constants from '../constants';

export const JWTConfig: FastifyJWTOptions = {
  secret: constants.JWT_SECRET!,
};
