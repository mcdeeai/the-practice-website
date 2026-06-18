import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/**
 * Monospace, uppercase label with a small filled square bullet.
 * The signature "eyebrow" of the Isomorphic-style layout.
 */
export function Eyebrow({
  children,
  className,
  tone = 'ink',
}: {
  children: ReactNode
  className?: string
  tone?: 'ink' | 'muted' | 'invert'
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em]',
        tone === 'ink' && 'text-foreground',
        tone === 'muted' && 'text-muted-foreground',
        tone === 'invert' && 'text-background/70',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-block size-2 shrink-0',
          tone === 'invert' ? 'bg-background' : 'bg-primary',
        )}
      />
      {children}
    </p>
  )
}

/** Rounded, hairline-bordered panel — the structural unit of the page. */
export function Panel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border bg-card',
        className,
      )}
    >
      {children}
    </div>
  )
}

/**
 * A page section laid out as a two-column split:
 * an eyebrow label on the left, content on the right.
 */
export function Section({
  eyebrow,
  children,
  className,
  id,
}: {
  eyebrow: string
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'border-t border-border py-20 md:py-28',
        className,
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[200px_1fr] md:gap-16">
        <Eyebrow className="pt-1">{eyebrow}</Eyebrow>
        <div>{children}</div>
      </div>
    </section>
  )
}

/** Large, light-weight display heading in the Isomorphic register. */
export function Heading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'max-w-[20ch] text-pretty text-3xl font-light leading-[1.1] tracking-tight md:text-[2.75rem]',
        className,
      )}
    >
      {children}
    </h2>
  )
}
