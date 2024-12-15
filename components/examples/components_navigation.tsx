'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const menuItems = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Productos',
    href: '/productos',
    submenu: [
      { name: 'Categoría 1', href: '/productos/categoria-1' },
      { name: 'Categoría 2', href: '/productos/categoria-2' },
      { name: 'Categoría 3', href: '/productos/categoria-3' },
    ],
  },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navigation() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="bg-background shadow-md">
      <ul className="flex items-center justify-center p-4 space-x-8">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            {item.submenu ? (
              <div>
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                  className={`flex items-center space-x-1 text-foreground hover:text-primary ${
                    pathname.startsWith(item.href) ? 'text-primary' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                </button>
                {openSubmenu === item.name && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 py-2 bg-background border border-border rounded-md shadow-lg z-10"
                  >
                    {item.submenu.map((subitem) => (
                      <li key={subitem.name}>
                        <Link href={subitem.href} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground">
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`text-foreground hover:text-primary ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

