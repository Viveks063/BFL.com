import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

const features = [
  {
    title: 'Built for Real Problems',
    description: 'Every product solves a practical challenge. No vanity projects — only tools people actually need.',
    number: '01',
    accent: 'rgba(139, 92, 246, 0.4)',
  },
  {
    title: 'Modern Technology',
    description: 'Built using cutting-edge AI and web technologies. Always current, always improving.',
    number: '02',
    accent: 'rgba(59, 130, 246, 0.4)',
  },
  {
    title: 'Performance First',
    description: 'Fast, scalable, and optimized experiences. Speed is a feature, not an afterthought.',
    number: '03',
    accent: 'rgba(20, 184, 166, 0.4)',
  },
  {
    title: 'Continuous Innovation',
    description: 'New ideas and products are constantly being developed. We ship fast and iterate faster.',
    number: '04',
    accent: 'rgba(245, 158, 11, 0.4)',
  },
]

export function WhyBFL() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10">
        <SectionHeading
          label="Why BuildForge Labs"
          title="Built different, by design."
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
                  We build with purpose
                </h3>
                <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
                  Every tool we create starts with a real problem. We combine cutting-edge
                  technology with thoughtful design to build products that genuinely make
                  a difference.
                </p>
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-medium">12+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-medium">18+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Technologies</div>
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
