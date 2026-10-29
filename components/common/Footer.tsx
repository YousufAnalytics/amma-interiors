"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="font-serif text-lg font-bold text-white uppercase tracking-wider">
            Amma Interiors
          </span>
          <p className="text-xs text-slate-500 mt-1">
            © {year} Amma Interiors. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-xs uppercase">
          <Link
            href="/"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
