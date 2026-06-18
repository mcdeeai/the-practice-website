import { Section, Heading } from './ui'

export function WhySection() {
  return (
    <Section eyebrow="Why this matters">
      <Heading>You feel two things about AI at once.</Heading>
      <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Excitement — this might be the biggest lever you&apos;ll ever pull.
          And a quieter worry: that you&apos;re already behind, that everyone
          else has cracked it, that you&apos;ll pour money into the wrong thing.
        </p>
        <p>
          Both are true. AI really is that big — and most of the noise really is
          a waste of your time.
        </p>
        <p>
          So here&apos;s what we believe. This isn&apos;t a race to look modern
          this year. It&apos;s the long game — the only one that counts: build a
          company that keeps getting smarter, compounds year after year, and is
          still standing when the hype clears.
        </p>
        <p>
          You don&apos;t get there with a hundred half-built pilots. You get
          there by making one important thing work, owning it, and building from
          there. That&apos;s the whole idea.
        </p>
      </div>
    </Section>
  )
}

export function ProblemSection() {
  return (
    <Section eyebrow="The problem">
      <Heading>AI isn&apos;t your problem. Starting is.</Heading>
      <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          You&apos;ve got the tools, a few pilots, and a dozen open tabs. Your
          people are busy. But nothing new actually runs — and the business
          isn&apos;t getting any smarter.
        </p>
        <p>
          You don&apos;t need another study, another committee, or another deck.
          You need one real thing, working, where it counts. Now.
        </p>
      </div>
    </Section>
  )
}

const METHOD_STEPS = [
  {
    title: 'Picture the ideal.',
    body: 'We start at the end — the best version of how this one part of your business could run.',
  },
  {
    title: 'Audit where you are.',
    body: "An honest, exact picture of today — what works, what's broken, what's missing.",
  },
  {
    title: 'Map the journey.',
    body: 'The straight line from here to there — a plan your team can actually run.',
  },
]

export function MethodSection() {
  return (
    <Section eyebrow="Our method" id="method">
      <Heading>Start at the end. Then map the way there.</Heading>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {METHOD_STEPS.map((step, i) => (
          <li
            key={step.title}
            className="rounded-3xl border border-border bg-background p-6"
          >
            <span className="font-mono text-sm tabular-nums text-primary">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-[40ch] text-xl font-medium tracking-tight">
        Our small team facilitates. Your team executes.
      </p>
      <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
        That&apos;s the whole point. The work stays in your hands — so the
        skill, the system, and the credit stay with you. No dependency. No
        vendor you can&apos;t fire.
      </p>
    </Section>
  )
}

const KEEP_ITEMS = [
  ['One workflow, live.', 'The real thing, working in your business.'],
  ['The map.', 'How it runs, where the AI sits, and what to watch.'],
  ['The runbook.', 'Plain steps so your team operates it without us.'],
  ["Your team, trained.", "The people who'll run it, ready on day ten."],
  [
    'A 90-day plan.',
    'What to build next, in order, with honest effort and payoff.',
  ],
]

export function KeepSection() {
  return (
    <Section eyebrow="What you keep" id="keep">
      <Heading>You leave with a system, not a slide deck.</Heading>
      <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
        Ten days in, there&apos;s no report to file. There&apos;s something that
        runs — and everything your team needs to own it.
      </p>
      <ul className="mt-8 max-w-[60ch]">
        {KEEP_ITEMS.map(([term, desc]) => (
          <li
            key={term}
            className="grid grid-cols-[12px_1fr] gap-4 border-b border-border py-5 first:border-t"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-2.5 bg-primary"
            />
            <span className="leading-relaxed">
              <span className="font-medium">{term}</span>{' '}
              <span className="text-muted-foreground">{desc}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

const PROCESS_STEPS = [
  {
    title: 'You apply.',
    body: "Tell us who you are, the one workflow you'd pick, and why now.",
  },
  {
    title: 'One real call.',
    body: "Not a sales call — a working session. We'll both know quickly if there's something here.",
  },
  {
    title: "If it's a fit, we start.",
    body: 'We clear the decks and run the sprint beside your team. We facilitate; they build.',
  },
  {
    title: 'We hand it over.',
    body: 'You own the system, the code, and the know-how. Then we leave.',
  },
]

export function ProcessSection() {
  return (
    <Section eyebrow="How it works">
      <Heading>Four steps. No theater.</Heading>
      <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
        {PROCESS_STEPS.map((step, i) => (
          <li key={step.title} className="bg-background p-6 md:p-8">
            <span className="font-mono text-sm tabular-nums text-primary">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function WhoSection() {
  return (
    <Section eyebrow="Who it's for">
      <Heading>For founders who can decide in the room.</Heading>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-background p-7">
          <h3 className="text-base font-medium tracking-tight">A fit if…</h3>
          <ul className="mt-4 space-y-0">
            {[
              "You're the founder or CEO, and you can say yes.",
              'The business is real — enough scale that one smart change pays for itself.',
              'You want it built now, not studied for a year.',
            ].map((t) => (
              <li
                key={t}
                className="grid grid-cols-[18px_1fr] gap-3 border-b border-border py-3.5 text-[15px] leading-relaxed last:border-b-0"
              >
                <span aria-hidden="true" className="font-semibold text-primary">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-background p-7">
          <h3 className="text-base font-medium tracking-tight">
            Not a fit if…
          </h3>
          <ul className="mt-4 space-y-0">
            {[
              'It needs a committee to approve.',
              'You want a pilot, a proposal, or a procurement process.',
              "You're shopping for the lowest price.",
            ].map((t) => (
              <li
                key={t}
                className="grid grid-cols-[18px_1fr] gap-3 border-b border-border py-3.5 text-[15px] leading-relaxed text-muted-foreground last:border-b-0"
              >
                <span aria-hidden="true" className="font-semibold">
                  —
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

const PRICE_REASONS = [
  [
    "It's fast.",
    'We compress months of work into ten days — and clear the decks to do it.',
  ],
  [
    "It's exclusive.",
    'A few founders a quarter. You get us, not a bench of juniors.',
  ],
  [
    "It's exceptional.",
    "Senior people who've done this before, and a system that actually works. Cheap AI advice is everywhere. This isn't that.",
  ],
]

export function PriceSection() {
  return (
    <Section eyebrow="What it costs" id="pricing">
      <Heading>It&apos;s expensive. On purpose.</Heading>
      <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
        This costs more than a typical project, and it should. Three reasons.
      </p>
      <ul className="mt-8 max-w-[60ch]">
        {PRICE_REASONS.map(([term, desc]) => (
          <li
            key={term}
            className="grid grid-cols-[12px_1fr] gap-4 border-b border-border py-5 first:border-t"
          >
            <span aria-hidden="true" className="mt-2 size-2.5 bg-primary" />
            <span className="leading-relaxed">
              <span className="font-medium">{term}</span>{' '}
              <span className="text-muted-foreground">{desc}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">From $100,000</span>, paid
        up front. A few founders each quarter — when the slots are gone,
        they&apos;re gone.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        You own everything we build.
      </p>
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
        As of June — 5 slots left this year.
      </p>
    </Section>
  )
}

const TERMS = [
  ['Price', 'From $100,000'],
  ['Payment', 'In full, up front'],
  ['Availability', 'A few founders each quarter'],
  ['Access', 'Founder or CEO only'],
  ['Ownership', 'You keep everything we build'],
  ['After', 'We leave. No lock-in, no retainer'],
]

export function TermsSection() {
  return (
    <Section eyebrow="Terms">
      <Heading>Clear from the start.</Heading>
      <ul className="mt-8 max-w-[54ch]">
        {TERMS.map(([k, v]) => (
          <li
            key={k}
            className="flex items-baseline justify-between gap-6 border-b border-border py-4 text-[15px]"
          >
            <span className="font-medium">{k}</span>
            <span className="text-right text-muted-foreground">{v}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-[54ch] leading-relaxed text-muted-foreground">
        We don&apos;t do RFPs or long procurement cycles. If that&apos;s
        required, we&apos;re not the right firm — and that&apos;s fine.
      </p>
    </Section>
  )
}

export function NameSection() {
  return (
    <Section eyebrow="The name">
      <Heading>Why &ldquo;The Practice.&rdquo;</Heading>
      <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          A practice is what a surgeon or a lawyer keeps — not an agency, not a
          vendor. Something you do with care, every day, and keep getting better
          at.
        </p>
        <p>
          That&apos;s how we treat AI. Not a one-time project you file away. A
          discipline you own and sharpen, for good.
        </p>
      </div>
    </Section>
  )
}

export function ManifestoSection() {
  return (
    <Section eyebrow="Why this matters">
      <Heading className="max-w-[16ch]">Play the long game.</Heading>
      <p className="mt-6 max-w-[30ch] text-2xl font-light leading-snug tracking-tight md:text-[1.75rem]">
        Make one thing work. Own it. Build from there — for years, not quarters.
      </p>
    </Section>
  )
}
