"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Home, FolderGit2, Briefcase, Github, Linkedin, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURED_PROJECTS } from "@/lib/projects";

/** Dispatched by e.g. a navbar button to open the palette without a keybind. */
export const OPEN_EVENT = "open-command-palette";

function buildItems(router) {
  const nav = (href) => () => router.push(href);
  const open = (href) => () => window.open(href, "_blank", "noopener,noreferrer");

  return [
    { id: "home", label: "About / Home", hint: "page", icon: Home, action: nav("/") },
    { id: "projects", label: "Projects", hint: "page", icon: FolderGit2, action: nav("/projects") },
    { id: "experience", label: "Experience", hint: "page", icon: Briefcase, action: nav("/experience") },
    ...FEATURED_PROJECTS.map((p) => ({
      id: `project-${p.title}`,
      label: p.title,
      hint: "project",
      icon: FolderGit2,
      action: p.githubLink || p.projectLink ? open(p.githubLink || p.projectLink) : nav("/projects"),
    })),
    { id: "github", label: "GitHub", hint: "social", icon: Github, action: open("https://github.com/RaphaLK") },
    {
      id: "linkedin",
      label: "LinkedIn",
      hint: "social",
      icon: Linkedin,
      action: open("https://www.linkedin.com/in/raphaelkusuma/"),
    },
    {
      id: "email",
      label: "Copy email address",
      hint: "contact",
      icon: Copy,
      action: () => navigator.clipboard?.writeText("raphaelkusuma5@gmail.com"),
    },
  ];
}

/**
 * Cmd/Ctrl+K palette for jumping to pages, featured projects, and socials.
 * Also opens on a window "open-command-palette" event (see Navbar's hint
 * button) so it isn't keyboard-only.
 */
export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => buildItems(router), [router]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(q));
  }, [items, query]);

  function openPalette() {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (open) {
          setOpen(false);
        } else {
          openPalette();
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener(OPEN_EVENT, openPalette);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener(OPEN_EVENT, openPalette);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
    setActiveIndex(0);
  }

  function runItem(item) {
    if (!item) return;
    item.action();
    setOpen(false);
  }

  function handleInputKeydown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runItem(filtered[activeIndex]);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-bg/70 px-4 pt-[14vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="font-mono text-sm text-brand">$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleInputKeydown}
            placeholder="Type a command or search..."
            spellCheck={false}
            autoComplete="off"
            className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-faint"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">
            esc
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto py-1.5">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-xs text-ink-faint">
              command not found
            </li>
          )}
          {filtered.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => runItem(item)}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors",
                    i === activeIndex ? "bg-surface-hover text-ink" : "text-ink-muted"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0 text-ink-faint" />
                  <span className="flex-1 truncate">{item.label}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-wide text-ink-faint">
                    {item.hint}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
