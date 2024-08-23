import { config } from '@/config';
import { Repo } from '@/lib/data/repositories';

import { Button } from './button';
import { Github } from './github';
import { Play } from './play';

export function Project({ repo }: { repo: Repo }) {
  return (
    <li className='w-[300px] min-h-[254px] flex flex-col rounded-lg bg-white text-black p-8'>
      <div className='min-h-[145px] flex flex-col gap-4'>
        <p className='text-wl font-bold'>{repo.name}</p>
        <p className='text-base'>{repo.description}</p>
        <div className='flex justify-evenly items-center'>
          {repo.languages.nodes.map((lang, index) => (
            <span
              key={index}
              className='inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10'
            >
              {lang.name}
            </span>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly items-center'>
        {repo.homepageUrl && config.APP_URL !== repo.homepageUrl && (
          <Button
            className='flex gap-4 my-2 !bg-ash-100 !hover:bg-ash-400 !focus:bg-ash-400'
            url={repo.homepageUrl}
          >
            <Play />
            <span>Play</span>
          </Button>
        )}
        <Button className='flex gap-4 my-2' url={repo.url}>
          <Github />
          <span>Code</span>
        </Button>
      </div>
    </li>
  );
}
