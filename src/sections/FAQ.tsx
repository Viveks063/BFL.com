import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

const faqs = [
  {
    q: 'What is BuildForge Labs?',
    a: 'BuildForge Labs is a digital innovation studio focused on building practical, AI-powered, and productivity-focused web products that help people create, learn, work, and grow faster.',
  },
  {
    q: 'What kinds of products do you build?',
    a: 'We build AI applications, developer tools, productivity tools, educational platforms, utility applications, and experimental projects — all designed to solve real-world problems.',
  },
  {
    q: 'Are the tools free?',
    a: 'Many of our tools offer free tiers. Some products have premium features for power users and teams. We believe in accessible technology.',
  },
  {
    q: 'Do you offer custom solutions?',
    a: 'Yes. We work with select partners to build custom AI-powered tools and applications tailored to specific business needs and workflows.',
  },
  {
    q: 'How can I stay updated?',
    a: 'Follow us on social media or subscribe to our newsletter for the latest product launches, updates, and insights from the studio.',
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
