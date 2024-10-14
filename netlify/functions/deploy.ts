// netlify/functions/deploy.ts

import type { Config } from '@netlify/functions';

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/670d784317d4f35d6e410522';

export default async (req: Request) => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  })
};

export const config: Config = {
  schedule: '0 7 * * *',
};
