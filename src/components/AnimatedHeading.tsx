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
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 max-w-[1100px]"
      style={{ letterSpacing: '-0.04em', lineHeight: 0.9 }}
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
