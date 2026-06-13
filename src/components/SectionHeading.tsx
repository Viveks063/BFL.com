import { ScrollReveal } from './ScrollReveal'

interface Props {
  label: string
  title: string
  description?: string
  gradient?: boolean
  center?: boolean
}

export function SectionHeading({ label, title, description, gradient, center }: Props) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <ScrollReveal animation="blur">
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
          {label}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={100} animation="fade-up">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-normal mb-4 ${gradient ? 'gradient-text' : ''}`}
          style={{ letterSpacing: '-0.04em' }}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={200} animation="blur">
          <p className={`text-base md:text-lg text-gray-400 ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
