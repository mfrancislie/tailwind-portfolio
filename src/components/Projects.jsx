import { projects } from '../data';
import SectionTitle from './SectionTitle';
import SingleProject from './SingleProject';

export default function Projects() {
  return (
    <section className="align-element py-20">
      <SectionTitle text="My Projects" />
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <SingleProject key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
