import { ShieldCheck, Clock, Leaf, HeartHandshake } from "lucide-react";
import logo from "@/assets/logo.png";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully insured & local",
    desc: "Adelaide-based, fully insured and properly equipped — so you're covered, every job.",
  },
  {
    icon: Clock,
    title: "On-time, every time",
    desc: "We turn up when we say we will, communicate clearly and finish on schedule.",
  },
  {
    icon: Leaf,
    title: "Gentle on your home",
    desc: "Pure-water systems and friendly cleaning solutions that respect your garden and pets.",
  },
  {
    icon: HeartHandshake,
    title: "Streak-free guarantee",
    desc: "If you're not happy with the finish, we'll come back and put it right. Simple as that.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why" className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-90" />
            <div className="relative bg-background rounded-3xl shadow-card p-10 flex items-center justify-center aspect-square">
              <img
                src={logo}
                alt="Glimmer Glass Cleaning mascot — friendly polar bear with squeegee"
                className="w-full h-auto animate-float-slow"
                width={320}
                height={320}
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase shadow-glow">
              Brrr-illiantly clean
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Why Glimmer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance mb-6">
            Friendly faces. Flawless finish.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-10 max-w-xl">
            We're a small Adelaide team with a simple promise: treat every home
            and business like it's our own — and leave the glass so clear you'll
            wonder if it's even there.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="flex gap-4 p-5 rounded-xl bg-background border border-border/60"
                >
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};