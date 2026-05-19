"use client";

import { useState, useEffect, useRef } from "react";
import { Github, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", num: "01", label: "Intro" },
  { id: "projects", num: "02", label: "Work" },
  { id: "about", num: "03", label: "About" },
  { id: "experience", num: "04", label: "Stack" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorTop, setIndicatorTop] = useState(0);
  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    if (!navListRef.current) return;
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if (activeIndex < 0) return;
    const items = navListRef.current.querySelectorAll("li");
    const activeItem = items[activeIndex];
    if (activeItem) {
      const navRect = navListRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      setIndicatorTop(itemRect.top - navRect.top + itemRect.height / 2 - 1.5);
    }
  }, [activeSection]);

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-screen w-[200px] flex-col justify-between py-10 px-6"
      style={{
        borderRight: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      {/* Top: monogram + name */}
      <div>
        <a
          href="#hero"
          className="block mb-1"
          style={{ transition: "color 200ms ease-out" }}
        >
          <span
            className="display block"
            style={{
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            SL
          </span>
        </a>
        <span
          className="mono-tag block"
          style={{ color: "var(--text-faint)", marginTop: "4px" }}
        >
          Suryatej
        </span>
      </div>

      {/* Middle: section links */}
      <div className="flex-1 flex items-center relative">
        {/* Active indicator marker on right edge */}
        <div
          style={{
            position: "absolute",
            right: -1,
            top: indicatorTop,
            width: "3px",
            height: "3px",
            background: "var(--accent)",
            transition: "top 300ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        <ul ref={navListRef} className="w-full space-y-5">
          {sections.map(({ id, num, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    "flex items-center gap-2.5 group",
                    "transition-colors"
                  )}
                  style={{ transition: "color 200ms ease-out" }}
                >
                  <span
                    className="mono-tag"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-faint)",
                      transition: "color 200ms ease-out",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                      transition: "color 200ms ease-out",
                    }}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom: social links + location */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
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
            href={`mailto:${personal.email}`}
            aria-label="Email"
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
            <Mail size={14} />
          </a>
        </div>
        <span
          className="mono-tag block"
          style={{ color: "var(--text-faint)" }}
        >
          HYD
        </span>
      </div>
    </aside>
  );
}
