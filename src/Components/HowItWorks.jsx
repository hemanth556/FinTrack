
import {
  UserPlus,
  Wallet,
  ChartNoAxesCombined,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create your account',
    description:
      'Sign up in seconds and set up your personal financial profile. Getting started is simple and completely hassle-free.',
    details: ['Quick registration', 'Personalized profile'],
  },
  {
    number: '02',
    icon: Wallet,
    title: 'Track your money',
    description:
      'Record your income and expenses, organize transactions, and keep all your financial activity in one place.',
    details: ['Manage transactions', 'Organize expenses'],
  },
  {
    number: '03',
    icon: ChartNoAxesCombined,
    title: 'Make smarter decisions',
    description:
      'Understand your spending patterns through insightful reports and take control of your financial future.',
    details: ['Visual reports', 'Track financial goals'],
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#F8FAF9] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Simple Process
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Your financial journey,
            <span className="text-emerald-500"> simplified.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Managing money shouldn't be complicated. Get started with
            three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-12 md:grid-cols-3">

          {/* Connecting Line */}
          <div className="absolute left-[16%] right-[16%] top-12 hidden border-t-2 border-dashed border-emerald-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div key={step.number} className="relative text-center">

                {/* Icon */}
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-emerald-100 bg-white text-emerald-600 shadow-lg shadow-emerald-100/50 transition duration-300 hover:-translate-y-2">
                  <Icon size={34} />
                </div>

                <span className="mt-6 inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold tracking-widest text-emerald-600">
                  STEP {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-sm leading-7 text-gray-500">
                  {step.description}
                </p>

                <div className="mt-6 flex flex-col items-center gap-3">
                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500"
                      />
                      {detail}
                    </div>
                  ))}
                </div>

              </div>
            )
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
          >
            Start your journey
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
