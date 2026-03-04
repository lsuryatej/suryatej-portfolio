"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

function InputField({
  label,
  id,
  required,
  ...props
}: {
  label: string;
  id: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="group relative">
      <label htmlFor={id} className="mono-tag mb-2 block text-[var(--text-muted)]">
        {label} {required && <span className="text-[var(--accent-light)]">*</span>}
      </label>
      <input
        id={id}
        required={required}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-faint)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
        {...props}
      />
    </div>
  );
}

function TextareaField({
  label,
  id,
  required,
  ...props
}: {
  label: string;
  id: string;
  required?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label htmlFor={id} className="mono-tag mb-2 block text-[var(--text-muted)]">
        {label} {required && <span className="text-[var(--accent-light)]">*</span>}
      </label>
      <textarea
        id={id}
        required={required}
        rows={5}
        className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-faint)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
        {...props}
      />
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const update = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <main className="min-h-screen py-20">
      {/* Grid bg */}
      <div className="grid-bg pointer-events-none fixed inset-0 opacity-30" />

      {/* Violet glow */}
      <div
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={14} />
            <span>Back home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="mono-tag mb-3 text-[var(--accent-light)]">Get in touch</p>
          <h1 className="display text-[clamp(2.5rem,8vw,5rem)] text-[var(--text-primary)]">
            Say hello.
          </h1>
          <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to talk ML. My
            inbox is open.
          </p>
        </motion.div>

        {formState === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-10 text-center"
          >
            <div className="mb-4 text-4xl">✦</div>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              Message sent.
            </h2>
            <p className="text-[var(--text-muted)]">
              I'll get back to you as soon as I can.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-6 text-sm text-[var(--accent-light)] underline-offset-4 hover:underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Name"
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={update("name")}
              />
              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={update("email")}
              />
            </div>
            <InputField
              label="Subject"
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={update("subject")}
            />
            <TextareaField
              label="Message"
              id="message"
              placeholder="Tell me what's on your mind..."
              required
              value={formData.message}
              onChange={update("message")}
            />

            {formState === "error" && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                Something went wrong. Please try again or email me directly at{" "}
                <a href={`mailto:${personal.email}`} className="underline underline-offset-4">
                  {personal.email}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={formState === "loading"}
              className={cn(
                "group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 font-medium text-white transition-all",
                "hover:bg-[var(--accent-light)] disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            >
              {formState === "loading" ? (
                <span className="mono-tag">Sending…</span>
              ) : (
                <>
                  Send message
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </button>
          </motion.form>
        )}

        {/* Alt contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Mail size={15} />
            {personal.email}
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </main>
  );
}
