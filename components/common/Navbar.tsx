"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define your navigation links
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "contacts", label: "Contact Us", href: "/contacts" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}

        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src="/logo.png"
            alt="Amma Interiors - Interior Architecture"
            width={400}
            height={200}
            priority
            className="h-30 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            // Check if the current route matches the link's href
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative py-2 text-sm uppercase tracking-wider transition-colors hover:text-yellow-400"
              >
                <span
                  className={isActive ? "text-yellow-400" : "text-slate-300"}
                >
                  {item.label}
                </span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-white/10 px-6 py-6 space-y-4">
          {navItems.map((item) => {
            // Check if the current route matches the link's href
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-sm uppercase tracking-wider"
              >
                <span
                  className={isActive ? "text-[#C5A880]" : "text-slate-300"}
                >
                  {item.label}
                </span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]"></span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
