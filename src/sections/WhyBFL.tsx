import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

const features = [
  {
    title: 'Full-Stack Web & Mobile Apps',
    description: 'Modern, responsive web applications (React, Next.js) and cross-platform mobile apps (Flutter, React Native) built for sleek UX and performance.',
    number: '01',
    accent: 'rgba(6, 182, 212, 0.4)',
  },
  {
    title: 'AI Applications & Smart Agents',
    description: 'Integrating LLMs (OpenAI, Claude, Gemini), autonomous AI agents, and RAG pipelines to automate workflows and empower applications.',
    number: '02',
    accent: 'rgba(168, 85, 247, 0.4)',
  },
  {
    title: 'Backend Architecture & Robust APIs',
    description: 'High-throughput Node.js, Python, and Go microservices, database modeling (PostgreSQL, MongoDB), and secure REST/GraphQL API design.',
    number: '03',
    accent: 'rgba(59, 130, 246, 0.4)',
  },
  {
    title: 'DevOps & AWS Cloud Infrastructure',
    description: 'Automated CI/CD pipelines with GitHub Actions, Docker containerization, and cost-optimized AWS cloud environments with zero-downtime shipping.',
    number: '04',
    accent: 'rgba(245, 158, 11, 0.4)',
  },
]

export function WhyBFL() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10">
        <SectionHeading
          label="Why BuildForgeLabs"
          title="Web, Mobile, AI & Cloud Engineering."
          gradient
        />

        {/* Spline 3D Hero Card */}
        <ScrollReveal animation="scale" className="mb-12">
          <Card className="w-full h-[400px] md:h-[500px] bg-black/[0.96] border-white/[0.08] relative overflow-hidden rounded-2xl">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-normal gradient-text mb-4"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Full-stack software, mobile, AI & cloud
                </h3>
                <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
                  I work with agencies, founders, and product teams to build modern web applications, cross-platform mobile apps, AI-powered features, backend microservices, and automated AWS cloud infrastructure.
                </p>
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-medium">Full-Stack & Mobile</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Web, Apps & AI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-medium">Cloud & DevOps</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">AWS & Automated CI/CD</div>
                  </div>
                </div>
              </div>

              {/* Right — 3D Scene */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.number} delay={i * 120} animation="scale">
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05]">
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px]"
                  style={{ background: feature.accent }}
                />
                <div className="relative">
                  <span className="text-xs font-mono tracking-wider text-gray-600 mb-6 block">{feature.number}</span>
                  <h3 className="text-xl md:text-2xl font-normal mb-3" style={{ letterSpacing: '-0.02em' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
