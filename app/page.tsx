import { SiteHeader } from '@/components/practice/site-header'
import { Hero } from '@/components/practice/hero'
import {
  WhySection,
  ProblemSection,
  MethodSection,
  KeepSection,
  ProcessSection,
  WhoSection,
  PriceSection,
  TermsSection,
  NameSection,
  ManifestoSection,
} from '@/components/practice/sections'
import { ApplySection } from '@/components/practice/apply'
import { SiteFooter } from '@/components/practice/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <WhySection />
      <ProblemSection />
      <MethodSection />
      <KeepSection />
      <ProcessSection />
      <WhoSection />
      <PriceSection />
      <TermsSection />
      <NameSection />
      <ManifestoSection />
      <ApplySection />
      <SiteFooter />
    </main>
  )
}
