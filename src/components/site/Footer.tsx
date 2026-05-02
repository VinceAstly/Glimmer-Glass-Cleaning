import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary-foreground/10 rounded-xl p-1.5">
              <img src={logo} alt="" className="h-10 w-10" width={40} height={40} />
            </div>
            <div>
              <div className="font-brand text-lg font-semibold">Glimmer Glass Cleaning</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Adelaide · South Australia
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
            Friendly, professional window cleaning for homes and businesses across
            greater Adelaide.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/80">
            Sitemap
          </h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Services</a></li>
            <li><a href="#plans" className="hover:text-primary-foreground transition-smooth">Plans</a></li>
            <li><a href="#gallery" className="hover:text-primary-foreground transition-smooth">Gallery</a></li>
            <li><a href="#why" className="hover:text-primary-foreground transition-smooth">Why us</a></li>
            <li><a href="#reviews" className="hover:text-primary-foreground transition-smooth">Reviews</a></li>
            <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Get a quote</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/80">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href="tel:0424811607" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Phone className="h-4 w-4" /> 0424 811 607
              </a>
            </li>
            <li>
              <a href="mailto:glimmerglass21222@gmail.com" className="flex items-center gap-2 hover:text-accent transition-smooth break-all">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">glimmerglass21222@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/80">
            Service area
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Greater Adelaide and surrounding suburbs, South Australia.
            Residential and commercial.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Glimmer Glass Cleaning. All rights reserved.</p>
        <p>Crafted with care in Adelaide.</p>
      </div>
    </footer>
  );
};