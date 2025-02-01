// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { Home, Brain, Activity, Heart, Trophy, User, Shield } from 'lucide-react';

export default function Navbar() {
  const isAdmin = true; // En un caso real, esto vendría de la autenticación

  const menuItems = [
    { href: "/", icon: <Home className="w-6 h-6" />, label: "Inicio" },
    { href: "/mind", icon: <Brain className="w-6 h-6" />, label: "Mente" },
    { href: "/body", icon: <Activity className="w-6 h-6" />, label: "Cuerpo" },
    { href: "/spirit", icon: <Heart className="w-6 h-6" />, label: "Espíritu" },
    { href: "/challenges", icon: <Trophy className="w-6 h-6" />, label: "Retos" },
    { href: "/profile", icon: <User className="w-6 h-6" />, label: "Perfil" }
  ];

  if (isAdmin) {
    menuItems.push({ href: "/admin/users", icon: <Shield className="w-6 h-6" />, label: "Admin" });
  }

  // Rutas a ocultar en versión móvil
  const hiddenOnMobile = ["/mind", "/spirit","/body", "/admin/users"];

  return (
    <>
      {/* Navbar móvil - bottom */}
      <nav className="md:hidden fixed bottom-0 w-full bg-background-darker border-t border-gray-800">
        <div className="flex justify-around py-2 px-4">
          {menuItems
            .filter((item) => !hiddenOnMobile.includes(item.href))
            .map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="flex flex-col items-center p-2 text-gray-400 hover:text-white"
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
        </div>
      </nav>

      {/* Navbar desktop - lateral */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-background-darker border-r border-gray-800">
        <div className="flex flex-col w-full p-4">
          <div className="mb-8 px-4">
            <h1 className="text-xl font-bold text-white">Wellness App</h1>
          </div>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
