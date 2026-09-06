import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import FloatingCube3D from "@/components/FloatingCube3D";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="grid items-start gap-10 py-14 sm:py-20 md:grid-cols-[1fr_18rem]">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
          ~/raphael — software engineer
        </p>
        <div className="space-y-4">
          <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05]">
            Hello, I&apos;m Raphael.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted">
            M.S. Computer Science &amp; Engineering at Santa Clara University.
            Currently interning at Google on Chrome Remote Desktop. I like
            systems programming, compilers, and building things end to end.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:raphaelkusuma5@gmail.com">
            <Button className="gap-1.5 font-mono text-sm">
              Let&apos;s connect
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://github.com/RaphaLK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/raphaelkusuma/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-line">
          <Image
            src="/Assets/MyPhoto.jpg"
            alt="Raphael Kusuma"
            fill
            sizes="(max-width: 768px) 100vw, 18rem"
            className="object-cover"
            priority
          />
        </div>
        <FloatingCube3D />
      </div>
    </section>
  );
}
