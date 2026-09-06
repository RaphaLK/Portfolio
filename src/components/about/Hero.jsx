import Image from "next/image";
import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import FloatingCube3D from "@/components/FloatingCube3D";
import { Button } from "@/components/ui/button";

// Drop a PDF in /public and set this (e.g. "/Raphael-Kusuma-Resume.pdf"),
// or point it at a hosted link. Left null → the Résumé button is hidden.
const RESUME_URL = null;

const META = ["Santa Clara, CA", "M.S. CSE @ SCU", "Graduating Dec 2026"];

export default function Hero() {
  return (
    <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-center lg:gap-14">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs text-ink-faint">
          <span className="text-brand">raphael@portfolio</span>
          <span className="text-ink-muted">:~$</span> whoami
          <span className="caret ml-1 text-ink">▋</span>
        </p>

        <div className="flex items-center gap-4">
          <Image
            src="/Assets/MyPhoto.jpg"
            alt="Raphael Kusuma"
            width={56}
            height={56}
            priority
            className="size-14 shrink-0 rounded-full border border-line object-cover"
          />
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.03]">
            Raphael Kusuma
          </h1>
        </div>

        <p className="max-w-md text-base leading-relaxed text-ink-muted">
          M.S. Computer Science &amp; Engineering at Santa Clara University.
          Currently interning at Google on Chrome Remote Desktop.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <a href="mailto:raphaelkusuma5@gmail.com">
            <Button className="gap-1.5 font-mono text-sm">
              Email
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
          {RESUME_URL && (
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 font-mono text-sm text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </a>
          )}
          <a
            href="https://github.com/RaphaLK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/raphaelkusuma/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-ink-faint">
          {META.map((item, i) => (
            <span key={item} className="flex items-center gap-2.5">
              {i > 0 && <span className="text-line-strong">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="h-[20rem] sm:h-[24rem] lg:h-[28rem]">
        <FloatingCube3D />
      </div>
    </section>
  );
}
