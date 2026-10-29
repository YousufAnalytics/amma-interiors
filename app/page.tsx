"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Stats from "@/components/common/Stats";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Layers,
  Box,
  CheckCircle2,
  Calculator,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight,
  SlidersHorizontal,
  Home as HomeIcon,
  Briefcase,
  Send,
  Check,
  Menu,
  X,
  Building,
  Maximize2,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Compass,
    title: "Architectural Space Planning",
    description:
      "Strategic spatial layouts engineered for optimal flow, ergonomic comfort, and architectural elegance.",
  },
  {
    icon: Box,
    title: "3D Visualisation & VR Rendering",
    description:
      "Ultra-realistic 3D walkthrough renderings allowing you to experience your spaces before construction starts.",
  },
  {
    icon: Layers,
    title: "Turnkey Execution",
    description:
      "End-to-end management covering civil procurement, lighting, custom joinery, and final decorative styling.",
  },
  {
    icon: Sparkles,
    title: "Custom Furniture & Millwork",
    description:
      "Handcrafted furniture, tailored wardrobes, and artisan cabinetry tailored to your project’s exact scale.",
  },
];

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Minimalist Haven",
    category: "Living Room",
    area: "1,200 sq.ft",
    location: "Bandra, Mumbai",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Nordic Culinary Hub",
    category: "Kitchen",
    area: "450 sq.ft",
    location: "Jubilee Hills, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Monochrome Retreat",
    category: "Bedroom",
    area: "650 sq.ft",
    location: "Koramangala, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Apex Tech Headquarters",
    category: "Commercial",
    area: "4,500 sq.ft",
    location: "Cyber City, Gurugram",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Warm Walnut Lounge",
    category: "Living Room",
    area: "1,500 sq.ft",
    location: "Alipore, Kolkata",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Bespoke Penthouse Suite",
    category: "Bedroom",
    area: "900 sq.ft",
    location: "Worli, Mumbai",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000",
  },
];

const TESTIMONIALS = [
  {
    name: "Poonam G",
    role: "Penthouse Owners, Mumbai",
    quote: "Very very good services.. And resonable rates.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Rajesh Singhania",
    role: "CEO, Nexa Ventures",
    quote:
      "They executed our 5,000 sq ft office workspace flawlessly under tight deadlines. Our team loves the balance between open collabs and private acoustic bays.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'portfolio' | 'contact'

  // Estimation Calculator State
  const [calcRoomType, setCalcRoomType] = useState("Full Home");
  const [calcSqFt, setCalcSqFt] = useState(1200);
  const [calcStyle, setCalcStyle] = useState("Modern Luxury");
  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 });

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Recalculate quotation whenever inputs change
  useEffect(() => {
    let baseRate = 1800; // Base cost per sq.ft in ₹ or $ multiplier
    if (calcRoomType === "Living Room") baseRate = 1400;
    if (calcRoomType === "Kitchen") baseRate = 2200;
    if (calcRoomType === "Bedroom") baseRate = 1500;
    if (calcRoomType === "Commercial Office") baseRate = 2000;

    let styleMultiplier = 1.0;
    if (calcStyle === "Minimalist Scandinavian") styleMultiplier = 0.9;
    if (calcStyle === "Modern Luxury") styleMultiplier = 1.25;
    if (calcStyle === "Classic Imperial") styleMultiplier = 1.45;

    const totalBase = calcSqFt * baseRate * styleMultiplier;
    setEstimatedCost({
      min: Math.round(totalBase * 0.9),
      max: Math.round(totalBase * 1.15),
    });
  }, [calcRoomType, calcSqFt, calcStyle]);

  const filteredProjects =
    selectedFilter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <div>
      {/* --- PAGE 1: HOME PAGE --- */}
      {currentPage === "home" && (
        <main className="animate-fade-in">
          {/* Hero Section */}
          <Hero />

          {/* Quick Stats Banner */}

          <Stats />
          {/* Interactive Portfolio Filter Section */}
          <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880]">
                  Curated Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-2">
                  Featured Designs
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {["All", "Living Room", "Kitchen", "Bedroom", "Commercial"].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`px-4 py-2 text-xs uppercase tracking-wider transition-all border ${
                        selectedFilter === cat
                          ? "bg-[#C5A880] text-black border-[#C5A880] font-semibold"
                          : "bg-transparent text-slate-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Grid of Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(0, 6).map((project) => (
                <div
                  key={project.id}
                  className="group bg-[#141414] border border-white/5 overflow-hidden hover:border-[#C5A880]/50 transition-all cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 text-[#C5A880] text-[10px] uppercase tracking-widest px-3 py-1">
                      {project.category}
                    </span>
                    <button className="absolute bottom-4 right-4 bg-[#C5A880] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white group-hover:text-[#C5A880] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {project.location} • {project.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="cursor-pointer px-8 py-3.5 border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors text-xs uppercase tracking-widest font-semibold"
              >
                View Full Showcase
              </Link>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-[#111] py-20 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest text-[#C5A880]">
                  Client Endorsements
                </span>
                <h2 className="text-3xl font-serif font-light text-white mt-2">
                  What Our Clients Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-[#181818] p-8 border border-white/5 relative"
                  >
                    <div className="flex items-center space-x-1 text-[#C5A880] mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic text-sm leading-relaxed mb-6 font-light">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border border-[#C5A880]/40"
                      />
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {t.name}
                        </h4>
                        <p className="text-slate-400 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
