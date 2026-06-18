export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">
          The Practice
          <span aria-hidden="true" className="text-primary">
            .
          </span>
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.14em]">
          By invitation · The 10-Day AI Build
        </span>
      </div>
    </footer>
  )
}
