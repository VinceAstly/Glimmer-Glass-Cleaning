import { Home, Building2, Droplets, Sun, Wind, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Windows",
    desc: "Interior and exterior cleaning for houses, units and townhomes — including frames, sills and tracks.",
  },
  {
    icon: Building2,
    title: "Commercial & Shopfront",
    desc: "Reliable scheduled cleans for storefronts, offices and showrooms across Adelaide.",
  },
  {
    icon: Droplets,
    title: "Pure Water Pole System",
    desc: "Reach high windows safely with deionised water — leaving zero spotting or streaks.",
  },
  {
    icon: Sun,
    title: "Skylights & Conservatories",
    desc: "Specialist care for skylights, glass roofs and sunrooms that bring the light back in.",
  },
  {
    icon: Wind,
    title: "Gutters & Solar Panels",
    desc: "Add-on cleaning for gutters and solar panels so your whole exterior performs at its best.",
  },
  {
    icon: Sparkles,
    title: "End of Lease & Builders",
    desc: "One-off detail cleans for moves, post-construction and pre-sale property prep.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            What we do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance mb-5">
            Cleaner windows, brighter spaces.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From single-storey homes in the suburbs to multi-level shopfronts in
            the CBD — we have the right kit for every job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {s.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};