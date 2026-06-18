import Image from 'next/image'
import { Eyebrow } from './ui'
import { HeroMotif } from './hero-motif'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text panel */}
        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 md:p-12">
          <div>
            <Eyebrow>The 10-Day AI Build</Eyebrow>
            <h1 className="mt-8 max-w-[16ch] text-pretty text-4xl font-light leading-[1.05] tracking-tight md:text-[3.5rem]">
              You&apos;ve spent a year talking about AI. Let&apos;s build one
              thing that works — in ten days.
            </h1>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
              Not a strategy deck. Not a pilot. A working system your team builds
              — with us guiding every step — and owns the day we leave.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#apply"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Apply to work with us
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                From $100,000.
              </span>{' '}
              A few founders each quarter. We say no more than we say yes.
            </p>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative flex flex-col gap-4">
          <div className="relative flex-1 overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/hero-render.png"
              alt="An abstract organic form rendered in cobalt and white, representing one well-built system."
              width={1024}
              height={1024}
              priority
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
          {/* Small supporting motif */}
          <div className="rounded-3xl border border-border bg-card p-6">
            <HeroMotif />
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              One change, in the right place, bends the whole curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
