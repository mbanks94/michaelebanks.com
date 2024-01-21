import Link from 'next/link';

const navItems = {
  '/': 'home',
  '/projects': 'projects',
  '/work': 'work',
  '/contact': 'contact',
};

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          id='nav'
          className='flex items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
        >
          <div className='flex space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, name]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
