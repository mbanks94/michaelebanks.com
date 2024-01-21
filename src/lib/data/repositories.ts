import { gql } from 'graphql-request';

import { client } from '../graphql';
import { getErrorMessage } from '../utils';

export type Repo = {
  id: string;
  name: string;
  description: string;
};

export type RepoData = {
  user: {
    repositories: {
      nodes: Repo[];
    };
  };
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

export const fetchRepositories = (username = 'mbanks94') => {
  try {
    return client.request<RepoData>(GetRepositories, { username });
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
