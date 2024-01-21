import { Repo } from '@/lib/data/repositories';

export function Project({ repo }: { repo: Repo }) {
  return (
    <div>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
    </div>
  );
}
