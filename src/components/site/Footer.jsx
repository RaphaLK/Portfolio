import { Github, Linkedin, Mail } from "lucide-react";
import MagneticLink from "@/components/MagneticLink";

const SOCIALS = [
  { href: "https://github.com/RaphaLK", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/raphaelkusuma/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:raphaelkusuma5@gmail.com", label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-ink-faint">
          <span className="text-brand">$</span> whoami — Raphael Kusuma ·{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-1">
          {SOCIALS.map(({ href, label, Icon }) => (
            <MagneticLink key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md text-ink-faint transition-colors hover:bg-surface hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            </MagneticLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
