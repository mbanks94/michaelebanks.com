import { useEffect, useState } from 'react';

import { client } from '../graphql';
import { getErrorMessage } from '../utils';

export type QueryOptions<TVariables> = {
  variables?: TVariables;
};

export const useQuery = <TData, TVariables extends { [key: string]: unknown }>(
  gql: string,
  options?: QueryOptions<TVariables>
) => {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<TData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await client.request<TData>(gql, options?.variables);
        setData(res);
      } catch (error) {
        setError(getErrorMessage(error));
      }
      setLoading(false);
    };

    fetch();
  }, []);

  return { data, loading, error };
};
