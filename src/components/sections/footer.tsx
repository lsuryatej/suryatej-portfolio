"use client";

import { Github, Linkedin } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      }}
    >
      {/* Top rule */}
      <div className="section-rule mb-8" />

      {/* Business card row */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <span
          className="mono-tag"
          style={{ color: "var(--text-faint)" }}
        >
          {personal.name}
        </span>
        <span
          className="mono-tag"
          style={{ color: "var(--text-faint)" }}
        >
          Hyderabad, India
        </span>
        <a
          href={`mailto:${personal.email}`}
          className="mono-tag"
          style={{
            color: "var(--text-faint)",
            transition: "color 200ms ease-out",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
          }
        >
          {personal.email}
        </a>
        <span
          className="mono-tag"
          style={{ color: "var(--text-faint)" }}
        >
          {new Date().getFullYear()}
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: "var(--text-faint)",
              transition: "color 200ms ease-out",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
            }
          >
            <Github size={14} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              color: "var(--text-faint)",
              transition: "color 200ms ease-out",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
            }
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
