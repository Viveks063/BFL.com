import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const CHAR_DELAY = 30
const INITIAL_DELAY = 200
const TRANSITION_MS = 500

export function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), INITIAL_DELAY)
    return () => clearTimeout(timer)
  }, [])

  const lines = text.split('\n')

  let globalIndex = 0

  return (
    <h1
      className={cn(
        "font-normal mb-4 max-w-[1000px] leading-[0.95] text-[clamp(2.2rem,3.4vw,4rem)] md:text-[clamp(2.6rem,3.8vw,4.8rem)] lg:text-[clamp(2.8rem,3.8vw,5.2rem)]",
        className
      )}
      style={{ letterSpacing: '-0.04em', whiteSpace: 'normal' }}
    >
      {lines.map((line, lineIndex) => {
        const lineStartIndex = globalIndex
        const chars = line.split('').map((char, charIndex) => {
          const delay = (lineStartIndex + charIndex) * CHAR_DELAY
          globalIndex++
          return (
            <span
              key={`${lineIndex}-${charIndex}`}
              className="inline-block"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: `${TRANSITION_MS}ms`,
                transitionTimingFunction: 'ease',
                transitionDelay: `${delay}ms`,
              }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          )
        })
        return (
          <span
            key={lineIndex}
            className="block"
            style={{
              marginBottom: lineIndex < lines.length - 1 ? '0.22em' : 0,
              whiteSpace: 'nowrap',
            }}
          >
            {chars}
          </span>
        )
      })}
    </h1>
  )
}
