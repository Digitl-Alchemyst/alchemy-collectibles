import 'server-only';

import { experimental_taintUniqueValue } from 'react';

export const readToken = process.env.SANITY_API_READ_TOKEN;
export const writeToken = process.env.SANITY_API_WRITE_TOKEN;

if (!readToken) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}
if (!writeToken) {
  throw new Error('Missing SANITY_API_WRITE_TOKEN');
}

experimental_taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  readToken
);
