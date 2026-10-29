const Stats = () => {
  return (
    <section className="border-y border-white/10 bg-[#141414]/50 py-12">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-3 gap-8 items-center text-center">
        <div>
          <p className="text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold">
            150+
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
            Projects Delivered
          </p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold">
            12+
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
            Years of Excellence
          </p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold">
            99%
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
            On-Time Execution
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
