import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Plans" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Glimmer Glass Cleaning logo"
            className="h-11 w-11 transition-smooth group-hover:rotate-[-6deg]"
            width={44}
            height={44}
          />
          <div className="leading-tight">
            <div className="font-brand text-lg text-primary font-semibold">Glimmer Glass</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Cleaning · Adelaide
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/75 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
          <a href="tel:0424811607">
            <Phone className="mr-2 h-4 w-4" />
            0424 811 607
          </a>
        </Button>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg">
          <ul className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild variant="hero" className="w-full mt-2">
                <a href="tel:0424811607" onClick={() => setOpen(false)}>
                  <Phone className="mr-2 h-4 w-4" />
                  0424 811 607
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};