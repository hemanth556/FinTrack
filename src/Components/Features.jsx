
import {
  Wallet,
  ChartNoAxesCombined,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Smart Expense Tracking',
    description:
      'Track every transaction effortlessly. Categorize your expenses and understand exactly where your money goes.',
    color: 'bg-emerald-50 text-emerald-600',
    number: '01',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Powerful Financial Insights',
    description:
      'Turn your financial data into meaningful insights with clear reports and visual spending analytics.',
    color: 'bg-blue-50 text-blue-600',
    number: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Budget Management',
    description:
      'Set monthly budgets, monitor your progress, and stay on track with smarter spending decisions.',
    color: 'bg-orange-50 text-orange-600',
    number: '03',
  },
]

function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Powerful Features
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Everything you need to
            <span className="text-emerald-500"> grow your money.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Take the guesswork out of managing money. FinTrack gives you
            the tools to make smarter financial decisions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.number}
                className="group relative rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-2xl p-4 ${feature.color}`}>
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-semibold text-gray-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 min-h-20 leading-7 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  Learn more
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Features
