'use client'

import React, { useState } from 'react'
import { Home, FileText, Users, BarChart3, FileBarChart, Menu, ChevronLeft } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const navigation = [
        { name: 'Dashboard', href: '/home/dashboard', icon: Home },
        { name: 'Eventos', href: '/home/eventos', icon: FileText },
        { name: 'Patrocinadores', href: '/home/patrocinadores', icon: Users },
        { name: 'Resultados', href: '/home/resultados', icon: BarChart3 },
        { name: 'Reportes', href: '/home/reportes', icon: FileBarChart },
    ]

    return (
        <div className={`flex flex-col bg-[#1A1A1A] h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4">
                {!isCollapsed && <h1 className="text-xl font-semibold text-white">Menú</h1>}
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-white hover:text-[#FFB800] transition-colors"
                >
                    {isCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
                </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center rounded-lg px-3 py-2 text-base font-normal transition-colors ${
                                isActive 
                                ? 'bg-white/20 text-white' 
                                : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <item.icon
                                className={`h-5 w-5 flex-shrink-0 ${
                                isActive ? 'text-[#FFB800]' : 'text-[#FFB800] group-hover:text-[#FFB800]'
                                }`}
                                aria-hidden="true"
                            />
                            {!isCollapsed && <span className="ml-3">{item.name}</span>}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
