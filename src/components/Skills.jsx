import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className="py-20 align-element " id="skills">
      {/* titile*/}
      <SectionTitle text="Tech Stack" />
      <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}
