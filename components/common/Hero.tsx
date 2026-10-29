import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-black via-[#111111] to-[#0D0D0D] overflow-hidden px-4">
      {/* Background Aesthetic Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 py-16">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#d49726] bg-[#C5A880]/10 px-4 py-1.5 border border-[#edd7ad]/30 mb-6">
          Architecture & Bespoke Interiors
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white tracking-tight leading-[1.1] mb-8">
          Crafting Spaces That <br />
          <span className="font-semibold italic text-[#d49726]">
            Inspire Sophistication
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-10">
          We blend architectural precision with bespoke artisanal furnishings to
          curate high-end residential & commercial spaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#d49726] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#b3956d] transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Explore Portfolio</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
