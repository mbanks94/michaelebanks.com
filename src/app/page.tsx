'use client';

import { Typewriter } from '@/components/typewriter';

export default function Home() {
  return (
    <section>
      <div>
        <h1>
          <Typewriter text={`Hi, I'm Michael 👋`} delay={150} />
        </h1>
      </div>
    </section>
  );
}
