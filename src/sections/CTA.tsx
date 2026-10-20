import { ScrollReveal } from '../components/ScrollReveal'

export function CTA() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-32">
      <ScrollReveal animation="scale">
        <div className="relative rounded-2xl overflow-hidden noise-overlay">
          {/* Aurora animated background */}
          <div className="aurora" />

          {/* Base dark background */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/[0.08]" />

          <div className="relative z-10 p-10 md:p-16 lg:p-24 text-center">
            <ScrollReveal delay={200} animation="blur">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-5 gradient-text"
                style={{ letterSpacing: '-0.04em' }}
              >
                Have a project in mind?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={350} animation="fade-up">
              <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto">
                Tell me what you're building, what support you need, and where you'd like to take the project.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={500} animation="fade-up">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Discuss Your Project
                </button>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View Selected Work
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
