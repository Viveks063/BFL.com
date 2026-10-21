import { SectionHeading } from '../components/SectionHeading'
import { GradientOrbs } from '../components/GradientOrbs'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Cloud, GitBranch, Boxes, Rocket, Server, Terminal } from 'lucide-react'

type GlowFeatureCardProps = {
  title: string
  category: string
  description: string
  icon: ReactNode
  gradient: string
  delay: number
}

function GlowFeatureCard({ title, category, description, icon, gradient, delay }: GlowFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[340px] group mx-auto"
    >
      <div
        className="absolute inset-0 w-full h-full min-h-[300px] opacity-50 group-hover:opacity-80 rounded-[36px] pointer-events-none transition-opacity duration-500"
        style={{ background: gradient, filter: 'blur(45px)' }}
      />
      <div
        className="self-stretch min-h-[300px] rounded-[36px] z-10 overflow-hidden flex flex-col justify-between"
        style={{
          border: '6px solid transparent',
          background: `linear-gradient(#141416, #141416) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90">
                {icon}
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                {category}
              </span>
            </div>
            <h3 className="text-white font-medium text-lg md:text-xl mb-2.5 tracking-tight">{title}</h3>
          </div>
          <p className="text-gray-400 text-[13.5px] leading-[1.6] font-normal selection:bg-white/20">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const cards: GlowFeatureCardProps[] = [
  {
    title: 'AWS & Cloud Architecture',
    category: 'Cloud',
    description: 'Production AWS environments designed for high availability, security, and scalability — EC2, ECS, Lambda serverless, S3, RDS, VPCs, and CloudFront CDN.',
    icon: <Cloud className="w-6 h-6 text-amber-400" />,
    gradient: 'linear-gradient(137deg, #F59E0B 0%, #FCD34D 45%, #F97316 100%)',
    delay: 0.1,
  },
  {
    title: 'CI/CD & DevOps Automation',
    category: 'DevOps',
    description: 'Automated continuous integration and delivery pipelines with GitHub Actions and GitLab CI — automated test execution, linting, build artifacts, and zero-downtime shipping.',
    icon: <GitBranch className="w-6 h-6 text-emerald-400" />,
    gradient: 'linear-gradient(137deg, #10B981 0%, #6EE7B7 45%, #06B6D4 100%)',
    delay: 0.15,
  },
  {
    title: 'Docker, K8s & IaC',
    category: 'Infrastructure',
    description: 'Containerized microservices with Docker, container orchestration with Kubernetes/ECS, and Infrastructure-as-Code (IaC) using Terraform for repeatable environments.',
    icon: <Boxes className="w-6 h-6 text-blue-400" />,
    gradient: 'linear-gradient(137deg, #3B82F6 0%, #60A5FA 45%, #8B5CF6 100%)',
    delay: 0.2,
  },
  {
    title: 'Deployments & Release Engineering',
    category: 'Delivery',
    description: 'Multi-stage release workflows (dev, staging, prod), rollback strategies, custom domain and SSL provisioning, health checks, and live uptime monitoring.',
    icon: <Rocket className="w-6 h-6 text-rose-400" />,
    gradient: 'linear-gradient(137deg, #EC4899 0%, #F43F5E 45%, #FB7185 100%)',
    delay: 0.25,
  },
  {
    title: 'Backend APIs & Microservices',
    category: 'Backend',
    description: 'High-throughput Node.js, Express, Python, and Go microservices with RESTful and GraphQL APIs, PostgreSQL/MongoDB database design, and caching layers.',
    icon: <Server className="w-6 h-6 text-purple-400" />,
    gradient: 'linear-gradient(137deg, #8B5CF6 0%, #A855F7 45%, #C084FC 100%)',
    delay: 0.3,
  },
  {
    title: 'Full-Stack Web Applications',
    category: 'Full-Stack',
    description: 'End-to-end web applications and dashboards built with React, Next.js, and TypeScript, engineered for lightning-fast responsiveness and clean architecture.',
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    gradient: 'linear-gradient(137deg, #06B6D4 0%, #22D3EE 45%, #3B82F6 100%)',
    delay: 0.35,
  },
]

export function WhatWeBuild() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <GradientOrbs />
      <div className="relative z-10">
        <SectionHeading
          label="Capabilities"
          title="DevOps, Cloud Architecture & Full-Stack Engineering"
          description="From scalable AWS cloud infrastructure and automated CI/CD pipelines to end-to-end full-stack software delivery."
          gradient
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-6 w-full max-w-[1150px] mx-auto">
          {cards.map((card) => (
            <GlowFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
