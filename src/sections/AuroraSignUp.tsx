import { useState } from 'react'
import { motion } from 'framer-motion'
import { Circle, Globe, GitFork, Eye, EyeOff } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

function StepItem({ number, text, active }: { number: number; text: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
        active
          ? 'bg-white text-black border border-white'
          : 'bg-brand-gray text-white border-transparent'
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          active ? 'bg-black text-white' : 'bg-white/10 text-white/40'
        }`}
      >
        {number}
      </span>
      <span>{text}</span>
    </div>
  )
}

function SocialButton({ icon: Icon, label }: { icon: typeof Globe; label: string }) {
  return (
    <button className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 cursor-pointer">
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
}

function InputGroup({
  label,
  placeholder,
  type = 'text',
  children,
}: {
  label: string
  placeholder: string
  type?: string
  children?: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        {children}
      </div>
    </div>
  )
}

export function AuroraSignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="px-2 lg:px-4 py-2 lg:py-4">
      <main className="flex min-h-screen w-full rounded-2xl overflow-hidden bg-black selection:bg-white/30 lg:h-screen lg:overflow-hidden">
        {/* Left Column — Hero */}
        <div className="relative hidden w-[52%] flex-col items-center justify-end pb-32 px-12 rounded-3xl overflow-hidden shadow-2xl lg:flex">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
              type="video/mp4"
            />
          </video>

          <motion.div
            className="relative z-10 w-full max-w-xs space-y-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <Circle className="h-5 w-5 fill-white text-white" />
              <span className="text-xl font-semibold tracking-tight">BuildForge Labs</span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <h2 className="text-4xl font-medium tracking-tight whitespace-nowrap">Join BuildForge Labs</h2>
              <p className="text-sm leading-relaxed text-white/60 px-0">
                Follow these 3 quick phases to activate your space.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <StepItem number={1} text="Register your identity" active />
              <StepItem number={2} text="Configure your studio" />
              <StepItem number={3} text="Finalize your profile" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column — Form */}
        <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-12 sm:px-12 lg:overflow-hidden lg:px-16 lg:py-6 xl:px-24">
          <motion.div
            className="w-full max-w-xl space-y-8 lg:space-y-6 sm:space-y-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-medium tracking-tight">Create New Profile</h1>
              <p className="text-sm text-white/40">Input your basic details to begin the journey.</p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={Globe} label="Google" />
              <SocialButton icon={GitFork} label="Github" />
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4 text-xs font-medium uppercase tracking-widest text-white/40">
                  Or
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" placeholder="John" />
                <InputGroup label="Last Name" placeholder="Doe" />
              </div>

              <InputGroup label="Email" placeholder="john@aurora.dev" type="email" />

              <div className="space-y-1.5">
                <InputGroup
                  label="Password"
                  placeholder="Min. 8 symbols"
                  type={showPassword ? 'text' : 'password'}
                >
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </InputGroup>
                <p className="text-xs text-white/30 pl-1">Requires at least 8 symbols.</p>
              </div>
            </div>

            {/* Submit */}
            <button className="mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98] cursor-pointer">
              Create Account
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-white/40">
              Member of the team?{' '}
              <a href="#" className="text-white underline underline-offset-2 hover:text-white/80">
                Log in
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  )
}
