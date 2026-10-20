import { useState } from 'react'
import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'

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

function InputGroup({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  multiline = false,
}: {
  label: string
  placeholder: string
  type?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  multiline?: boolean
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="relative">
        {multiline ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={5}
            className="min-h-[120px] w-full rounded-xl border-none bg-brand-gray px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        )}
      </div>
    </div>
  )
}

export function AuroraSignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    project: '',
    message: '',
  })

  const handleChange = (
    field: keyof typeof formData,
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const requiredFields = [
      formData.firstName.trim(),
      formData.lastName.trim(),
      formData.email.trim(),
      formData.project.trim(),
      formData.message.trim(),
    ]

    if (requiredFields.some((field) => !field)) {
      window.alert('Please fill in all fields before sending your inquiry.')
      return
    }

    const clientName = [formData.firstName, formData.lastName].filter(Boolean).join(' ') || 'Client'
    const subject = encodeURIComponent(`Project inquiry from ${clientName}`)
    const body = encodeURIComponent(
      [
        `Name: ${clientName}`,
        `Email: ${formData.email || 'Not provided'}`,
        `Project: ${formData.project || 'Not provided'}`,
        '',
        'Project details:',
        formData.message || 'No additional details provided.',
      ].join('\n'),
    )

    const recipient = 'viveksuvarna063@gmail.com'
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

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
              <h2 className="text-4xl font-medium tracking-tight whitespace-nowrap">Let&apos;s Build Something Useful</h2>
              <p className="text-sm leading-relaxed text-white/60 px-0">
                Share a little about your project, the technology involved, and the support you&apos;re looking for.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <StepItem number={1} text="Share the brief" active />
              <StepItem number={2} text="Scope the build" />
              <StepItem number={3} text="Plan delivery" />
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
              <h1 className="text-3xl font-medium tracking-tight">Tell me about your project</h1>
              <p className="text-sm text-white/40">Share a few details and I&apos;ll get in touch to talk through the work.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                />
                <InputGroup
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                />
              </div>

              <InputGroup
                label="Email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
              />

              <InputGroup
                label="Project or Company"
                placeholder="What are you building?"
                value={formData.project}
                onChange={handleChange('project')}
              />

              <InputGroup
                label="Project Brief"
                placeholder="Tell me about the app, the technology involved, and the support you're looking for."
                value={formData.message}
                onChange={handleChange('message')}
                multiline
              />

              <button
                type="submit"
                className="mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98] cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-white/40">
              Prefer a different way to start?{' '}
              <a
                href="mailto:viveksuvarna063@gmail.com?subject=Project%20Inquiry"
                className="text-white underline underline-offset-2 hover:text-white/80"
              >
                Let&apos;s talk
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  )
}
