import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Carousel1 from "@/components/Carousel1";

function Panel({ label, title, children, media }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
        {label}
      </p>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <div className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
      {media && <div className="mt-4">{media}</div>}
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <SectionHeading eyebrow="context" title="A bit more" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal className="h-full">
          <Panel label="education" title="Santa Clara University">
            <div className="space-y-3">
              <div className="border-l border-brand pl-3">
                <p className="font-medium text-ink">
                  M.S. Computer Science &amp; Engineering
                </p>
                <p className="mt-0.5 text-xs text-ink-faint">
                  GPA 3.923 / 4.0 · HCI Lab &amp; EPIC Lab · TA / Grader
                </p>
              </div>
              <div className="border-l border-line-strong pl-3">
                <p className="font-medium text-ink">
                  B.S. Computer Science &amp; Engineering
                </p>
                <p className="mt-0.5 text-xs text-ink-faint">
                  GPA ~3.5 / 4.0 · ICPC D2 — 4th in California
                </p>
              </div>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={60} className="h-full">
          <Panel
            label="leadership"
            title="Leadership & teamwork"
            media={
              <div className="relative h-40 overflow-hidden rounded-lg border border-line">
                <Image
                  src="/Assets/ImagesAbout/Teamwork/TeamPhoto.JPG"
                  alt="Team photo"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            }
          >
            Experienced Resident Assistant and Library Student Assistant. Awarded{" "}
            <span className="text-ink">&quot;Most Caring&quot;</span> and{" "}
            <span className="text-ink">
              &quot;Most likely to know a resident&apos;s name&quot;
            </span>
            .
          </Panel>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <Panel
            label="photography"
            title="Creative photography"
            media={<Carousel1 />}
          >
            As an RA I had access to the residence hall&apos;s camera. Here&apos;s
            a small set of what I took.
          </Panel>
        </Reveal>

        <Reveal delay={180} className="h-full">
          <Panel
            label="competitive programming"
            title="ICPC Division 2"
            media={
              <div className="relative h-40 overflow-hidden rounded-lg border border-line">
                <Image
                  src="/Assets/ICPC/ICPC1.jpg"
                  alt="ICPC competition"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            }
          >
            Competed at ICPC Division 2 for Santa Clara University —{" "}
            <span className="text-ink">#4 in California</span> (7th in the
            Pacific NW).
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
