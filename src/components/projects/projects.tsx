import { fetchRepositories } from '@/lib/data/repositories';

import { Project } from './project';

export async function Projects() {
  const data = await fetchRepositories('mbanks94');

  return (
    <div>
      {data?.user.repositories.nodes.map((repo) => (
        <Project key={`${repo.id}-${repo.name}`} repo={repo} />
      ))}
    </div>
  );
}
