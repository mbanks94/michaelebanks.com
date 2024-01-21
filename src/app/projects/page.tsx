'use client';

import { useQuery } from '@/lib/hooks';
import { GetRepositories, RepoData, RepoVariables } from '@/lib/queries';

export default function Page() {
  const { loading, error, data } = useQuery<RepoData, RepoVariables>(
    GetRepositories,
    {
      variables: { username: 'mbanks94' },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:</p>;

  return (
    <section>
      <h1 className='mb-8'>Projects</h1>
      <div>
        {data?.user.repositories.nodes.map((repo) => {
          return (
            <>
              <p>{repo.name}</p>
              <p>{repo.description}</p>
            </>
          );
        })}
      </div>
    </section>
  );
}
