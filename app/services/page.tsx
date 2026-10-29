"use client";
import { Box, Compass, Layers, Sparkles } from "lucide-react";
import { useState } from "react";

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

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);
  return (
    <main className="animate-fade-in py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C5A880]">
          Comprehensive Offerings
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
          Services & Project Portfolio
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm font-light">
          From architectural layout concepts to detailed 3D modeling and final
          luxury execution.
        </p>
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <h2 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] p-8 border border-white/5 hover:border-[#C5A880]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-6 group-hover:bg-[#C5A880] group-hover:text-black transition-colors">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-serif text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Portfolio Gallery */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-serif text-white">
            Full Gallery Archive
          </h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Living Room", "Kitchen", "Bedroom", "Commercial"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 text-xs tracking-wider transition-all ${
                    selectedFilter === cat
                      ? "bg-[#C5A880] text-black font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141414] border border-white/5 overflow-hidden group hover:border-[#C5A880]/40 transition-all cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] text-[#C5A880] uppercase tracking-widest border border-white/10">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif text-white group-hover:text-[#C5A880] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-xs text-slate-400 mt-2 space-x-4">
                  <span>Area: {project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
