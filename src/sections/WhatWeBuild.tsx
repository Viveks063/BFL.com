import { SectionHeading } from '../components/SectionHeading'
import { GradientOrbs } from '../components/GradientOrbs'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type GlowFeatureCardProps = {
  title: string
  description: string
  icon: ReactNode
  gradient: string
  delay: number
}

function GlowFeatureCard({ title, description, icon, gradient, delay }: GlowFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
    >
      <div
        className="absolute inset-0 w-full h-[260px] md:h-[300px] opacity-60 rounded-[40px] pointer-events-none"
        style={{ background: gradient, filter: 'blur(45px)' }}
      />
      <div
        className="self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden"
        style={{
          border: '8px solid transparent',
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-7 flex flex-col justify-between">
          <div className="text-white/90">{icon}</div>
          <div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const cards = [
  {
    title: 'Developer Tools',
    description: 'Practical tooling for teams shipping products faster with cleaner delivery workflows and deployment automation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    gradient: 'linear-gradient(137deg, #10B981 0%, #6EE7B7 45%, #06B6D4 100%)',
    delay: 0.15,
  },
  {
    title: 'Productivity Tools',
    description: 'Applications and workflows designed to reduce manual work, improve coordination, and keep day-to-day operations moving.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    gradient: 'linear-gradient(137deg, #F59E0B 0%, #FCD34D 45%, #F97316 100%)',
    delay: 0.2,
  },
  {
    title: 'Utility Applications',
    description: 'Focused web and mobile utilities that turn routine work into cleaner, more reliable experiences for real users.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M7 2v20" />
        <path d="M17 2v20" />
        <path d="M2 12h20" />
        <path d="M2 7h5" />
        <path d="M2 17h5" />
        <path d="M17 7h5" />
        <path d="M17 17h5" />
      </svg>
    ),
    gradient: 'linear-gradient(137deg, #A855F7 0%, #D8B4FE 45%, #EC4899 100%)',
    delay: 0.25,
  },
]

export function WhatWeBuild() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <GradientOrbs />
      <div className="relative z-10">
        <SectionHeading
          label="Selected Work"
          title="Selected Work & Capabilities"
          description="A look at the applications, integrations, and engineering work behind the products I help build."
          gradient
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 lg:gap-4 w-full max-w-[960px] mx-auto">
          {cards.map((card) => (
            <GlowFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
