import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/Reveal";

const SKILLS = {
  Languages: [
    "C++",
    "C",
    "Rust",
    "Java",
    "Python",
    "Bash",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],
  "Tools & DevOps": [
    "CMake",
    "gdb",
    "Linux",
    "Git",
    "Docker",
    "GCP",
    "Firebase",
    "Jenkins",
  ],
  Frameworks: [
    "Qt",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
  ],
};

const INTERESTS = ["Pickleball", "Ultimate Frisbee", "Coffee", "Boxing", "Photography"];

export default function Skills() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <SectionHeading eyebrow="stack" title="What I work with" />
      <div className="space-y-6">
        {Object.entries(SKILLS).map(([group, items], i) => (
          <Reveal key={group} delay={i * 60}>
            <p className="mb-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              {group}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
        <Reveal delay={180}>
          <p className="mb-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Beyond code
          </p>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => (
              <Tag key={item} variant="ghost">
                {item}
              </Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
