
import { Wallet, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#" className="flex items-center gap-2">
          <div className="rounded-xl bg-emerald-500 p-2 text-white">
            <Wallet size={22} />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Fin<span className="text-emerald-500">Track</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-emerald-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#contact" className="text-sm font-semibold text-gray-700">
            Log in
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-emerald-500 px-5 py-3 text-center font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
