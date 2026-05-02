import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-windows.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-sky"
    >
      {/* Decorative background bubbles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-32 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-soft mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">
              Adelaide · South Australia
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.02] text-balance mb-6">
            Crystal-clear windows.
            <br />
            <span className="italic text-foreground/80">Brilliantly clean.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[52ch] text-pretty mb-10 leading-relaxed">
            Friendly, professional window cleaning for homes and businesses across
            greater Adelaide. Streak-free results, every time — guaranteed.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Get a free quote
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#services">Our services</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 pt-8 border-t border-border max-w-md">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">5.0</span> from real
              Adelaide customers on Google
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            {/* Backing tiles */}
            <div className="absolute -inset-3 bg-primary/5 rounded-[2.5rem] rotate-3" />
            <div className="absolute -inset-1.5 bg-accent/10 rounded-[2.3rem] -rotate-2" />

            {/* Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-card glass-shine">
              <img
                src={heroImg}
                alt="Glimmer Glass Cleaning team member with water-fed pole on an Adelaide job"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating logo badge */}
            <div className="absolute -top-6 -left-6 bg-background rounded-2xl shadow-card p-3 animate-float-slow">
              <img src={logo} alt="" className="h-14 w-14" width={56} height={56} />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-background rounded-2xl shadow-card p-5 max-w-[200px]">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-3xl text-primary">500+</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Adelaide homes & businesses sparkling brighter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};