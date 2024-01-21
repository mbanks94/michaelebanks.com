import { GraphQLClient } from 'graphql-request';

import { config } from '@/config';

export const client = new GraphQLClient(config.GITHUB_GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${config.GITHUB_ACCESS_TOKEN}`,
  },
});
