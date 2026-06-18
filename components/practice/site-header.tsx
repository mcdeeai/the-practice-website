const NAV = [
  { label: 'Method', href: '#method' },
  { label: 'What you keep', href: '#keep' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href="#top"
          className="inline-flex items-center rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold tracking-tight"
        >
          The Practice
          <span aria-hidden="true" className="ml-0.5 text-primary">
            .
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-2">
          <ul className="hidden items-center gap-2 sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#apply"
            className="inline-flex items-center rounded-xl border border-primary bg-primary px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:opacity-90"
          >
            Apply
          </a>
        </nav>
      </div>
    </header>
  )
}
