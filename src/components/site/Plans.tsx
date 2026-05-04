import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Quarterly Cleaning",
    cadence: "Every 3 months",
    discount: "$150 OFF",
    tagline: "Best value for spotless windows all year round",
    perks: [
      { label: "$150 OFF every clean", included: true },
      { label: "FREE screen cleaning", included: true },
      { label: "FREE hard water removal", included: true },
      { label: "Priority booking", included: true },
    ],
    featured: true,
  },
  {
    name: "Bi-Annual Cleaning",
    cadence: "Every 6 months",
    discount: "$100 OFF",
    tagline: "Great for keeping your home fresh twice a year",
    perks: [
      { label: "$100 OFF every clean", included: true },
      { label: "FREE screen cleaning", included: true },
      { label: "Hard water removal", included: false },
      { label: "Priority booking", included: false },
    ],
    featured: false,
  },
  {
    name: "One-Time Clean",
    cadence: "Whenever you need",
    discount: "Standard rate",
    tagline: "Perfect for a quick refresh or special occasions",
    perks: [
      { label: "Discount", included: false },
      { label: "Free screen cleaning", included: false },
      { label: "Hard water removal", included: false },
      { label: "No long-term commitment", included: true },
    ],
    featured: false,
  },
];

export const Plans = () => {
  return (
    <section id="plans" className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            🧼 Choose your plan
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance mb-5">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Save more when you book a regular schedule. Every plan includes our
            streak-free guarantee.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`relative rounded-3xl p-8 lg:p-9 border transition-smooth flex flex-col animate-fade-up ${p.featured
                  ? "bg-gradient-hero text-primary-foreground border-primary shadow-glow lg:scale-105 lg:-my-2"
                  : "bg-card text-foreground border-border shadow-card hover:shadow-soft"
                }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-soft">
                  <Sparkles className="h-3 w-3" /> Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-2xl mb-1 ${p.featured ? "text-primary-foreground" : "text-primary"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.cadence}
                </p>
              </div>

              <div className={`mb-6 pb-6 border-b ${p.featured ? "border-primary-foreground/15" : "border-border"}`}>
                <div className={`font-display text-4xl ${p.featured ? "text-accent" : "text-primary"}`}>
                  {p.discount}
                </div>
                <p className={`text-sm mt-2 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.perks.map((perk) => (
                  <li key={perk.label} className="flex items-start gap-3 text-sm">
                    <span
                      className={`shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${perk.included
                          ? p.featured
                            ? "bg-accent text-primary"
                            : "bg-primary/10 text-primary"
                          : p.featured
                            ? "bg-primary-foreground/10 text-primary-foreground/50"
                            : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {perk.included ? <Check className="h-3 w-3" strokeWidth={3} /> : <X className="h-3 w-3" strokeWidth={3} />}
                    </span>
                    <span
                      className={
                        perk.included
                          ? p.featured ? "text-primary-foreground" : "text-foreground"
                          : p.featured ? "text-primary-foreground/50 line-through" : "text-muted-foreground line-through"
                      }
                    >
                      {perk.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={p.featured ? "glass" : "hero"}
                size="lg"
                className="w-full"
              >
                <a href="#contact">Choose {p.name.split(" ")[0]}</a>
              </Button>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Final pricing depends on your property size & number of windows. Get a free quote — no obligation.
        </p>
      </div>
    </section>
  );
};