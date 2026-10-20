import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { GradientOrbs } from '../components/GradientOrbs'

const steps = [
  { number: '01', title: 'Understand the requirement', description: 'Clarify the goal, the user or business need, and the outcome you want to achieve.' },
  { number: '02', title: 'Align scope and milestones', description: 'Define the deliverables, priorities, and project boundaries before implementation begins.' },
  { number: '03', title: 'Develop and review', description: 'Build the implementation with regular feedback and technical review throughout the process.' },
  { number: '04', title: 'Test and refine', description: 'Check the work, resolve issues, and make sure the result matches the agreed scope.' },
  { number: '05', title: 'Deliver and hand over', description: 'Provide the agreed code and assist with deployment or handover when that support is included in scope.' },
]

export function Process() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <GradientOrbs />
      <div className="relative z-10">
        <SectionHeading
          label="Our Process"
          title="From requirement to delivery."
          gradient
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-px">
            <div className="w-full h-full bg-white/20" />
          </div>

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal
                  key={step.number}
                  delay={i * 120}
                  animation={isLeft ? 'fade-right' : 'fade-left'}
                >
                  <div className="relative flex items-start md:items-center">
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-[26px] h-[26px] rounded-full bg-black border-2 border-white/40 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-auto md:text-right md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                      <div className="group rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500">
                        <span className="text-xs font-mono tracking-wider text-gray-500 mb-2 block">{step.number}</span>
                        <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
