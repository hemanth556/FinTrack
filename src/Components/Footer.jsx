
import { Wallet, ArrowUpRight } from 'lucide-react'

function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '#how-it-works' },
        { name: 'Our mission', href: '#how-it-works' },
        { name: 'Get in touch', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help center', href: '#contact' },
        { name: 'Support', href: '#contact' },
        { name: 'Privacy policy', href: '#privacy' },
        { name: 'Terms of service', href: '#terms' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'X', href: 'https://x.com' },
  ]

  return (
    <footer className="bg-[#102B24] px-6 pt-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="rounded-xl bg-emerald-500 p-2">
                <Wallet size={23} />
              </div>

              <span className="text-2xl font-bold">
                Fin<span className="text-emerald-400">Track</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Take control of your finances with smarter expense tracking,
              budgeting, and financial insights. Build a better financial
              future with FinTrack.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 font-bold">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-emerald-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            Built for smarter financial decisions
            <ArrowUpRight size={15} className="text-emerald-400" />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
