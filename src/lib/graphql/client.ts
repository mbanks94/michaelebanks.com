import { GraphQLClient } from 'graphql-request';

const url = process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT ?? '';
const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export const client = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});
