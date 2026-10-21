import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

const faqs = [
  {
    q: 'What web and mobile application development services do you offer?',
    a: 'I build end-to-end web applications (React, Next.js, TypeScript) and cross-platform mobile apps for iOS and Android (Flutter, React Native). This includes responsive user interfaces, native device features, state management, offline sync, and app store publishing.',
  },
  {
    q: 'Can you build AI applications and integrate LLMs?',
    a: 'Yes. I develop intelligent AI-powered applications, integrating foundation models (OpenAI, Anthropic Claude, Google Gemini), custom autonomous AI agents, Retrieval-Augmented Generation (RAG) pipelines, semantic search, and generative workflows into your existing product.',
  },
  {
    q: 'Do you handle complete full-stack development (frontend & backend)?',
    a: 'Absolutely. I build both sides of the application: sleek, interactive frontends as well as high-throughput backend APIs, microservices (Node.js, Express, Python, Go), database architecture (PostgreSQL, MongoDB), authentication, and caching layers.',
  },
  {
    q: 'What DevOps, AWS, and Cloud services do you provide?',
    a: 'I specialize in AWS cloud architecture (EC2, ECS, Lambda serverless, S3, RDS, CloudFront), Docker containerization, Terraform Infrastructure as Code (IaC), automated CI/CD pipelines (GitHub Actions, GitLab), and zero-downtime production deployments.',
  },
  {
    q: 'Can you integrate with an existing team or codebase?',
    a: 'Yes. I can contribute as a lead full-stack engineer, mobile specialist, AI developer, or DevOps engineer alongside your current team, maintaining clean code standards, git workflows, and transparent communication.',
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
