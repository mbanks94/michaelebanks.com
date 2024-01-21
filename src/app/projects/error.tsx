'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='flex h-full flex-col items-start'>
      <h2>Something went wrong!</h2>
      <button
        className='mt-4 rounded-md bg-[#B1B6A6] px-4 py-2 text-sm text-black transition-colors hover:bg-[#C4C8BC]'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
