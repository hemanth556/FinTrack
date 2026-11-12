
import { useState } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

function Pricing() {
  const [yearly, setYearly] = useState(false)

  const plans = [
    {
      name: 'Free',
      description: 'Everything you need to start managing money.',
      monthly: 0,
      yearly: 0,
      features: [
        'Basic expense tracking',
        'Monthly budget management',
        'Basic financial reports',
        'Transaction history',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Advanced tools for smarter financial decisions.',
      monthly: 12,
      yearly: 9,
      features: [
        'Unlimited expense tracking',
        'Advanced budget management',
        'Detailed financial analytics',
        'Unlimited transaction history',
        'Custom financial goals',
        'Priority support',
      ],
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Simple Pricing
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Plans that fit your
            <span className="text-emerald-500"> financial goals.</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Start for free and upgrade whenever you're ready.
            No hidden fees or complicated pricing.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-gray-100 p-2">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
                !yearly
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
                yearly
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500'
              }`}
            >
              Yearly
            </button>
          </div>

          {yearly && (
            <p className="mt-3 text-sm font-medium text-emerald-600">
              Save 25% with yearly billing!
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">

          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 transition hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular
                    ? 'border-emerald-500 bg-[#F8FAF9] shadow-lg shadow-emerald-100'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-8 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white">
                    <Sparkles size={14} />
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${price}
                  </span>
                  <span className="mb-2 text-sm text-gray-500">
                    / month
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  {yearly && plan.monthly > 0
                    ? 'Billed annually'
                    : 'Billed monthly'}
                </p>

                <a
                  href="#contact"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold transition ${
                    plan.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'border border-gray-200 bg-white text-gray-800 hover:border-emerald-500 hover:text-emerald-600'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started Free' : 'Choose Pro'}
                  <ArrowRight size={18} />
                </a>

                <div className="my-8 border-t border-gray-200" />

                <p className="mb-5 text-sm font-bold text-gray-900">
                  What's included:
                </p>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="rounded-full bg-emerald-50 p-1 text-emerald-600">
                        <Check size={14} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Pricing
