import { useEffect, useRef, useState, type ReactNode } from 'react'

type Animation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'

interface Props {
  children: ReactNode
  delay?: number
  animation?: Animation
  className?: string
}

const initialStyles: Record<Animation, { opacity: number; transform: string; filter?: string }> = {
  'fade-up': { opacity: 0, transform: 'translateY(40px)' },
  'fade-down': { opacity: 0, transform: 'translateY(-40px)' },
  'fade-left': { opacity: 0, transform: 'translateX(-60px)' },
  'fade-right': { opacity: 0, transform: 'translateX(60px)' },
  'scale': { opacity: 0, transform: 'scale(0.85)' },
  'blur': { opacity: 0, transform: 'translateY(20px)', filter: 'blur(10px)' },
}

export function ScrollReveal({ children, delay = 0, animation = 'fade-up', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const initial = initialStyles[animation]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : initial.opacity,
        transform: visible ? 'translateY(0) translateX(0) scale(1)' : initial.transform,
        filter: visible ? 'blur(0px)' : (initial.filter || 'blur(0px)'),
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
