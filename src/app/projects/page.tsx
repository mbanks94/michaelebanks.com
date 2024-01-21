import { Projects } from '@/components/projects/projects';

export default async function Page() {
  return (
    <section>
      <h1 className='mb-8'>Projects</h1>
      <Projects />
    </section>
  );
}
