import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '../components/ScrollReveal'
import { AnimatedCounter } from '../components/AnimatedCounter'

const stats = [
  { value: 25, suffix: '+', label: 'Web, mobile & cloud builds', accent: 'rgba(139, 92, 246, 0.4)' },
  { value: 100, suffix: '%', label: 'Full-stack & AI capability', accent: 'rgba(59, 130, 246, 0.4)' },
  { value: 99, suffix: '.9%', label: 'Cloud uptime & reliability', accent: 'rgba(20, 184, 166, 0.4)' },
  { value: 20, suffix: '+', label: 'DevOps & AI frameworks', accent: 'rgba(245, 158, 11, 0.4)' },
]

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = -rect.top / (rect.height + window.innerHeight)
      setOffset(progress * 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-[130%] object-cover"
          style={{ transform: `translateY(${offset}px)` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 150} animation="scale">
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-md p-8 md:p-10 text-center overflow-hidden hover:border-white/10 transition-all duration-500">
                {/* Accent glow */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[40px]"
                  style={{ background: stat.accent }}
                />
                <div className="relative">
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl font-normal mb-3"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
