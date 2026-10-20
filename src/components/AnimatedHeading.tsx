import { useState, useEffect } from 'react'

const CHAR_DELAY = 30
const INITIAL_DELAY = 200
const TRANSITION_MS = 500

export function AnimatedHeading({ text }: { text: string }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), INITIAL_DELAY)
    return () => clearTimeout(timer)
  }, [])

  const lines = text.split('\n')

  let globalIndex = 0

  return (
    <h1
      className="font-normal mb-4 max-w-[1200px] leading-[0.78] text-[clamp(4.2rem,7vw,9.5rem)] md:text-[clamp(5rem,8vw,12rem)] lg:text-[clamp(6rem,8vw,14rem)]"
      style={{ letterSpacing: '-0.06em' }}
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
          <span key={lineIndex} className="block">
            {chars}
          </span>
        )
      })}
    </h1>
  )
}
