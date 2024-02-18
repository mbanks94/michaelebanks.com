import { fetchRepositories } from '@/lib/data/repositories';

import { Project } from './project';

export async function Projects() {
  const data = await fetchRepositories('mbanks94');

  return (
    <ul className='flex flex-row flex-wrap gap-16'>
      {data?.user.repositories.nodes.map((repo) => (
        <Project key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}
