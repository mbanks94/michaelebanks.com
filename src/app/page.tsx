'use client';

import { Typewriter } from '@/components/typewriter';

export default function Home() {
  return (
    <section>
      <div>
        <h1>
          <Typewriter
            text={`Hi, I'm Michael 👋 Welcome to my site.`}
            delay={135}
          />
        </h1>
      </div>
    </section>
  );
}
