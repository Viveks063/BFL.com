import { AnimatedHeading } from './components/AnimatedHeading'
import { FadeIn } from './components/FadeIn'
import { ScrollReveal } from './components/ScrollReveal'
import { LimelightNav } from '@/components/ui/limelight-nav'
import { Home, Boxes, Eye, GitBranch, HelpCircle } from 'lucide-react'
import { WhatWeBuild } from './sections/WhatWeBuild'
import { WhyBFL } from './sections/WhyBFL'
import { Vision } from './sections/Vision'
import { Process } from './sections/Process'
import { Stats } from './sections/Stats'
import { FAQ } from './sections/FAQ'
import { CTA } from './sections/CTA'
import { AuroraSignUp } from './sections/AuroraSignUp'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  const navItems = [
    { id: 'hero', icon: <Home />, label: 'Home', onClick: () => scrollTo('hero') },
    { id: 'products', icon: <Boxes />, label: 'Capabilities', onClick: () => scrollTo('products') },
    { id: 'vision', icon: <Eye />, label: 'Services', onClick: () => scrollTo('vision') },
    { id: 'process', icon: <GitBranch />, label: 'Process', onClick: () => scrollTo('process') },
    { id: 'faq', icon: <HelpCircle />, label: 'FAQ', onClick: () => scrollTo('faq') },
  ]

  const footerLinks = [
    { label: 'Work', target: 'products' },
    { label: 'Why BFL', target: 'why-bfl' },
    { label: 'Services', target: 'vision' },
    { label: 'FAQ', target: 'faq' },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div id="hero" className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative z-10 min-h-screen flex flex-col">
          <nav className="px-6 md:px-12 lg:px-16 pt-6">
            <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
              <span
                className="text-2xl font-semibold tracking-tight cursor-pointer"
                onClick={() => scrollTo('hero')}
              >
                BFL
              </span>
              <div className="hidden md:block">
                <LimelightNav
                  items={navItems}
                  className="bg-transparent"
                  iconClassName="text-white"
                />
              </div>
              <button
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                onClick={() => scrollTo('signup')}
              >
                Let&apos;s Talk
              </button>
            </div>
          </nav>

          <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div>
                <AnimatedHeading text={"Your next software\nproject,\nbuilt and shipped."} />
                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl leading-relaxed">
                    I build high-performance web applications, iOS & Android mobile apps, intelligent AI applications, and robust backend architectures — fully backed by scalable AWS cloud infrastructure and automated DevOps CI/CD pipelines.
                  </p>
                </FadeIn>
                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium cursor-pointer transition-all hover:bg-gray-100 active:scale-95"
                      onClick={() => scrollTo('signup')}
                    >
                      Discuss a Project
                    </button>
                    <button
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white hover:text-black cursor-pointer active:scale-95"
                      onClick={() => scrollTo('products')}
                    >
                      Explore Capabilities
                    </button>
                  </div>

                  {/* Core Tech Stack Badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">Web (React / Next.js)</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">Mobile (iOS & Android)</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">AI Apps & Agents</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">Full-Stack & APIs</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">DevOps & CI/CD</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">AWS Cloud</span>
                  </div>
                </FadeIn>
              </div>

              <div className="flex flex-col items-start lg:items-end justify-start lg:justify-end mt-8 lg:mt-0 gap-3">
                <FadeIn delay={1400} duration={1000}>
                  <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                    <span className="text-lg md:text-xl lg:text-2xl font-light">
                      Web • Mobile • AI • Cloud
                    </span>
                  </div>
                </FadeIn>
                <FadeIn delay={1600} duration={1000}>
                  <div className="flex items-center gap-2 text-xs text-gray-400 px-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Full-Stack Development • AI Integration • AWS & DevOps</span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="products"><WhatWeBuild /></div>
      <div id="why-bfl"><WhyBFL /></div>
      <div id="vision"><Vision /></div>
      <div id="process"><Process /></div>
      <div id="stats"><Stats /></div>
      <div id="faq"><FAQ /></div>
      <div id="cta"><CTA /></div>
      <div id="signup"><AuroraSignUp /></div>

      {/* Footer */}
      <footer className="relative px-6 md:px-12 lg:px-16 py-16 border-t border-white/[0.06] overflow-hidden">
        <div className="orb orb-2" style={{ top: '-60%', right: '-15%', opacity: 0.3 }} />
        <div className="relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <span
                className="text-2xl font-semibold tracking-tight cursor-pointer"
                onClick={() => scrollTo('hero')}
              >
                BFL
              </span>
              <div className="flex items-center gap-8">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={`#${link.target}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.target) }}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <span className="text-sm text-gray-600">&copy; 2026 BuildForgeLabs</span>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}

export default App
