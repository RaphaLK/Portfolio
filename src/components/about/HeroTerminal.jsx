"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HELP_TEXT = `available commands:
  whoami        quick bio
  projects      jump to featured work
  experience    jump to work history
  skills        what I work with
  contact       how to reach me
  socials       github / linkedin
  clear         clear the terminal`;

const LINK_CLASS =
  "text-brand underline underline-offset-2 hover:text-brand-hover";

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "help":
      return HELP_TEXT;
    case "whoami":
      return "Raphael Kusuma — M.S. CSE @ Santa Clara University. Currently interning at Google on Chrome Remote Desktop.";
    case "projects":
    case "ls projects":
      return (
        <>
          see the full list at{" "}
          <Link href="/projects" className={LINK_CLASS}>
            /projects
          </Link>
          .
        </>
      );
    case "experience":
    case "ls experience":
      return (
        <>
          full history at{" "}
          <Link href="/experience" className={LINK_CLASS}>
            /experience
          </Link>
          .
        </>
      );
    case "skills":
      return "C++, Rust, Python, TypeScript, React, Next.js — see the 'stack' section below.";
    case "contact":
    case "email":
      return (
        <>
          reach me at{" "}
          <a href="mailto:raphaelkusuma5@gmail.com" className={LINK_CLASS}>
            raphaelkusuma5@gmail.com
          </a>
        </>
      );
    case "socials":
    case "github":
    case "linkedin":
      return (
        <>
          <a
            href="https://github.com/RaphaLK"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            github.com/RaphaLK
          </a>
          {"  ·  "}
          <a
            href="https://www.linkedin.com/in/raphaelkusuma/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            linkedin.com/in/raphaelkusuma
          </a>
        </>
      );
    case "sudo":
    case "sudo su":
    case "sudo su -":
      return "nice try — this shell doesn't grant root.";
    case "coffee":
      return "☕ brewing... productivity +1.";
    case "":
      return null;
    default:
      return `command not found: ${cmd} — type 'help'`;
  }
}

/**
 * The "whoami" prompt line in the Hero, upgraded into an actually-typeable
 * mini terminal. Commands print inline; `clear` resets the scrollback.
 */
export default function HeroTerminal() {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const idRef = useRef(0);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [history]);

  function pushEntry(kind, content) {
    // Capture the id now — the updater below runs later, by which point a
    // second pushEntry call in the same handler would have moved idRef on.
    const id = ++idRef.current;
    setHistory((h) => [...h, { id, kind, content }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cmd = value;
    setValue("");
    if (!cmd.trim()) return;

    pushEntry("cmd", cmd);
    if (cmd.trim().toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    const output = runCommand(cmd);
    if (output) pushEntry("output", output);
  }

  return (
    <div
      className="rounded-lg border border-line bg-surface/40 font-mono text-xs"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="max-h-40 overflow-y-auto px-3 pt-2.5">
        <p className="pb-1.5 text-ink-faint">
          <span className="text-brand">raphael@portfolio</span>
          <span className="text-ink-muted">:~$</span> whoami
        </p>
        <p className="pb-1.5 leading-relaxed text-ink-muted">
          Software engineer &amp; grad student. Type{" "}
          <span className="text-brand">help</span> to look around.
        </p>
        {history.map((entry) =>
          entry.kind === "cmd" ? (
            <p key={entry.id} className="pb-1.5 text-ink-muted">
              <span className="text-brand">raphael@portfolio</span>
              <span className="text-ink-muted">:~$</span> {entry.content}
            </p>
          ) : (
            <p
              key={entry.id}
              className="whitespace-pre-line pb-1.5 leading-relaxed text-ink-muted"
            >
              {entry.content}
            </p>
          )
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-1.5 border-t border-line/70 px-3 py-2"
      >
        <span className="text-brand">raphael@portfolio</span>
        <span className="text-ink-muted">:~$</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type a command…"
          spellCheck={false}
          autoComplete="off"
          aria-label="terminal command"
          className="min-w-0 flex-1 bg-transparent text-ink caret-brand outline-none placeholder:text-ink-faint"
        />
      </form>
    </div>
  );
}
