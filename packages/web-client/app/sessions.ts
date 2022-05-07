import { createCookieSessionStorage } from '@remix-run/node';
import { isProd } from './constants';

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      domain: isProd ? process.env.DOMAIN_NAME : undefined,
      httpOnly: true,
      maxAge: 3600,
      path: '/',
      sameSite: 'lax',
      secrets: ['secrettt'],
      secure: isProd,
    },
  });
