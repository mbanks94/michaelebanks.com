import { gql } from 'graphql-request';

export type RepoData = {
  user: {
    repositories: {
      nodes: { name: string; description: string }[];
    };
  };
};

export type RepoVariables = {
  username: string;
};

export const GetRepositories = gql`
  query GetRepositories($username: String!) {
    user(login: $username) {
      repositories(first: 10, ownerAffiliations: [OWNER], privacy: PUBLIC) {
        nodes {
          name
          description
        }
      }
    }
  }
`;
