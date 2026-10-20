import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

const faqs = [
  {
    q: 'What kinds of projects can you help with?',
    a: 'I can support web applications, mobile apps, backend APIs, dashboards, internal tools, and integration work for agencies, startups, and product teams.',
  },
  {
    q: 'Can you work with an existing development team?',
    a: 'Yes. I can support a current team with implementation, integration work, API development, frontend or backend tasks, and delivery support alongside your existing process.',
  },
  {
    q: 'Can you contribute to an existing codebase?',
    a: 'Yes. I can join an active codebase, understand the current architecture, and help implement features, fix issues, and improve the quality of the work without disrupting the existing setup.',
  },
  {
    q: 'How does a project engagement begin?',
    a: 'We start by understanding the requirement, the technical context, and the outcome you want. From there we agree on scope, deliverables, milestones, and the work to be built.',
  },
  {
    q: 'Can you help with APIs, integrations, and deployment?',
    a: 'Yes. I can assist with API development, database or Firebase integrations, third-party services, deployment automation, and handover support when those tasks are included in the agreed scope.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 80} animation="fade-up">
      <div className="border-b border-white/[0.06] group">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
        >
          <span className="text-base md:text-lg font-medium pr-4 group-hover:text-gray-200 transition-colors">{q}</span>
          <span
            className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
        >
          <p className="text-gray-400 pb-6 leading-relaxed">{a}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function FAQ() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32">
      <SectionHeading
        label="FAQ"
        title="Questions & answers."
      />
      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </section>
  )
}
