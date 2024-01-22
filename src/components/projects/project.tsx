import { Repo } from '@/lib/data/repositories';

import { Button } from '../button';

export function Project({ repo }: { repo: Repo }) {
  return (
    <li className='w-[300px] h-[254px] flex flex-col item rounded-[50px] bg-[#e0e0e0] text-black p-8'>
      <div className='h-[145px] flex flex-col gap-4'>
        <p className='mb-2 text-lg font-bold'>{repo.name}</p>
        <p>{repo.description}</p>
      </div>
      <Button className='self-center' url={repo.url}>
        View code
      </Button>
    </li>
  );
}
