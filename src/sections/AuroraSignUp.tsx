import { useState } from 'react'
import { motion } from 'framer-motion'
import { Circle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

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
  disabled = false,
}: {
  label: string
  placeholder: string
  type?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  multiline?: boolean
  disabled?: boolean
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
            disabled={disabled}
            className="min-h-[120px] w-full rounded-xl border-none bg-brand-gray px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'activation_needed' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (
    field: keyof typeof formData,
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage('')
    }
    setFormData((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const firstName = formData.firstName.trim()
    const lastName = formData.lastName.trim()
    const email = formData.email.trim()
    const project = formData.project.trim()
    const message = formData.message.trim()

    if (!firstName || !lastName || !email || !project || !message) {
      setStatus('error')
      setStatusMessage('Please fill in all fields before sending your inquiry.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    const clientName = [firstName, lastName].filter(Boolean).join(' ') || 'Client'
    const recipient = 'viveksuvarna063@gmail.com'

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      let response: Response

      if (web3FormsKey) {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: clientName,
            email: email,
            project: project,
            message: message,
            subject: `Project inquiry from ${clientName}`,
            from_name: 'BuildForge Labs Website',
          }),
        })
      } else {
        response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: clientName,
            email: email,
            project: project,
            message: message,
            _subject: `Project inquiry from ${clientName}`,
            _replyto: email,
            _captcha: 'false',
            _template: 'table',
          }),
        })
      }

      const data = await response.json()

      if (data.success === true || data.success === 'true') {
        setStatus('success')
        setStatusMessage("Thank you! Your inquiry has been sent. I'll get back to you shortly.")
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          project: '',
          message: '',
        })
      } else if (typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
        setStatus('activation_needed')
        setStatusMessage("One-time setup: FormSubmit sent a verification email to viveksuvarna063@gmail.com. Please click 'Activate Form' in that email once so future submissions land directly in your inbox.")
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          project: '',
          message: '',
        })
      } else {
        setStatus('error')
        setStatusMessage(data.message || 'Failed to send inquiry. Please try again.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Network error. Please check your internet connection and try again.')
    }
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
                Share a little about your project, AWS or DevOps requirements, CI/CD automation, and the engineering support you need.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <StepItem number={1} text="Share the brief" active />
              <StepItem number={2} text="Architect & scope" />
              <StepItem number={3} text="Build, deploy & automate" />
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
              <p className="text-sm text-white/40">Share a few details and I&apos;ll get in touch to discuss your architecture, software build, or cloud requirements.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  disabled={status === 'loading'}
                />
                <InputGroup
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  disabled={status === 'loading'}
                />
              </div>

              <InputGroup
                label="Email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                disabled={status === 'loading'}
              />

              <InputGroup
                label="Project or Company"
                placeholder="What are you building or deploying? (e.g., SaaS App, AWS Setup)"
                value={formData.project}
                onChange={handleChange('project')}
                disabled={status === 'loading'}
              />

              <InputGroup
                label="Project Brief"
                placeholder="Tell me about the app, cloud infrastructure (AWS/DevOps), CI/CD needs, or the technology involved."
                value={formData.message}
                onChange={handleChange('message')}
                multiline
                disabled={status === 'loading'}
              />

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300 text-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-emerald-200">Inquiry Sent Successfully</p>
                    <p className="text-emerald-300/80 text-xs mt-0.5">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              {status === 'activation_needed' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-300 text-sm"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-200">One-Time Activation Needed</p>
                    <p className="text-amber-300/80 text-xs mt-0.5">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-300 text-sm"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-rose-200">Could Not Send</p>
                    <p className="text-rose-300/80 text-xs mt-0.5">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-black" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <span>Send Inquiry</span>
                )}
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
