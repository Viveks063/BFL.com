import { useState, useEffect, type ReactNode } from 'react'

export function FadeIn({ children, delay = 0, duration = 1000 }: { children: ReactNode; delay?: number; duration?: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transitionProperty: 'opacity',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'ease',
      }}
    >
      {children}
    </div>
  )
}
