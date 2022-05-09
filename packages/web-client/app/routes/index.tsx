import type { LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import LandingAppShell from '~/layouts/landing/LandingAppShell';
import { commitSession, getSession } from '~/sessions';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('userId')) {
    return redirect('/dashboard');
  }

  return json(
    {},
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
};

export default function Index() {
  const data = useLoaderData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <LandingAppShell></LandingAppShell>;
}
