import { fetchRepositories } from '@/lib/data/repositories';

import { Project } from './project';

export async function Projects() {
  const data = await fetchRepositories();

  return (
    <div>
      {data?.user.repositories.nodes.map((repo) => (
        <Project key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
