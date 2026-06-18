'use client'

import { useState } from 'react'
import { Eyebrow } from './ui'

export function ApplySection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="apply" className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[200px_1fr] md:gap-16">
        <Eyebrow tone="invert" className="pt-1">
          Apply
        </Eyebrow>
        <div>
          <h2 className="max-w-[20ch] text-pretty text-3xl font-light leading-[1.1] tracking-tight md:text-[2.75rem]">
            Tell us three things.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-background/70">
            Who you are, the one workflow you&apos;d pick, and why now. If
            there&apos;s a fit, you&apos;ll hear from us.
          </p>

          {submitted ? (
            <p className="mt-10 max-w-[40ch] text-xl font-light tracking-tight">
              Thank you — we&apos;ll be in touch.
            </p>
          ) : (
            <form
              className="mt-10 grid max-w-[560px] gap-6"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <Field
                label="Your name & company"
                placeholder="Jane Rivera — Northwind"
              >
                <input
                  type="text"
                  required
                  placeholder="Jane Rivera — Northwind"
                  className="w-full border-b border-background/25 bg-transparent py-2 text-base text-background outline-none transition-colors placeholder:text-background/40 focus:border-background"
                />
              </Field>
              <Field label="The one workflow you'd pick">
                <input
                  type="text"
                  required
                  placeholder="e.g. how we price every quote"
                  className="w-full border-b border-background/25 bg-transparent py-2 text-base text-background outline-none transition-colors placeholder:text-background/40 focus:border-background"
                />
              </Field>
              <Field label="Why now">
                <textarea
                  rows={3}
                  required
                  placeholder="A sentence or two."
                  className="w-full resize-none border-b border-background/25 bg-transparent py-2 text-base text-background outline-none transition-colors placeholder:text-background/40 focus:border-background"
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send application
              </button>
            </form>
          )}

          <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-background/60">
            We read every serious note. If it&apos;s a fit, you&apos;ll hear
            from us within a few days. If it&apos;s not, we&apos;ll tell you
            straight.
          </p>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  placeholder?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.14em] text-background/55">
        {label}
      </span>
      {children}
    </label>
  )
}
