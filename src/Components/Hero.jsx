
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Wallet,
  CreditCard,
  CircleDollarSign,
} from 'lucide-react'

function Hero() {
  return (
    <section className="overflow-hidden bg-[#F8FAF9] px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Hero Content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Smart money management starts here
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Take control of your money,
            <span className="text-emerald-500"> effortlessly.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            Track expenses, manage budgets, and understand your spending
            habits. Everything you need to build a healthier financial future.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-600"
            >
              Start for free <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-emerald-400"
            >
              Explore features <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {['A', 'J', 'M', 'S'].map((letter, index) => (
                <div
                  key={letter}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-bold text-emerald-700"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">
                Built for smarter spending
              </p>
              <p className="text-xs text-gray-500">
                Your finances, all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-200/70">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Balance
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  $24,562.00
                </h2>
                <p className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-600">
                  <TrendingUp size={16} /> +12.8% this month
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-600">
                <Wallet size={28} />
              </div>
            </div>

            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-gray-500">
                  <CircleDollarSign size={18} />
                  <span className="text-sm">Income</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">$8,450</h3>
                <p className="mt-1 text-xs text-emerald-600">
                  +8.2% this month
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-gray-500">
                  <CreditCard size={18} />
                  <span className="text-sm">Expenses</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">$3,240</h3>
                <p className="mt-1 text-xs text-red-500">
                  -2.4% this month
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">
                  Monthly Overview
                </h3>
                <span className="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  Last 7 months
                </span>
              </div>

              <div className="flex h-36 items-end justify-between gap-3">
                {[45, 65, 50, 85, 60, 75, 95].map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      style={{ height: `${height}%` }}
                      className={`w-full rounded-t-lg ${
                        index === 6 ? 'bg-emerald-500' : 'bg-emerald-100'
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-gray-400">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(
                  (month) => <span key={month}>{month}</span>
                )}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Savings goal</p>
                <p className="font-bold text-gray-900">78% completed</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
