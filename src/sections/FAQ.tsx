import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

const faqs = [
  {
    q: 'What DevOps, AWS, and Cloud services do you provide?',
    a: 'I specialize in AWS cloud architecture (EC2, ECS, Lambda, S3, RDS, CloudFront), Docker containerization, infrastructure-as-code with Terraform, automated deployments, monitoring, and setting up high-availability environments.',
  },
  {
    q: 'Can you set up automated CI/CD pipelines for our team?',
    a: 'Yes. I configure end-to-end continuous integration and continuous deployment pipelines using GitHub Actions, GitLab CI, and AWS developer tools. This includes automated test runs, container builds, staging preview environments, and zero-downtime production releases.',
  },
  {
    q: 'What kinds of software development projects do you build?',
    a: 'I build modern full-stack web applications, backend APIs (REST & GraphQL), microservices, dashboards, and internal tools with React, Next.js, Node.js, Python, and TypeScript, backed by robust cloud infrastructure.',
  },
  {
    q: 'Can you containerize an existing app or migrate it to AWS?',
    a: 'Yes. I help containerize existing applications with Docker, migrate databases and assets to AWS cloud services, optimize infrastructure costs, and set up automated deployment pipelines without downtime.',
  },
  {
    q: 'Can you work alongside our current development or operations team?',
    a: 'Absolutely. I can step in as a dedicated DevOps/cloud engineer or full-stack contributor, collaborating via pull requests, documentation, and agile workflows alongside your existing engineers.',
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
