import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      suburb: String(formData.get("suburb") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim() || null,
    };

    const { error } = await supabase.from("quote_requests").insert(payload);

    // Send email notification via Web3Forms
    try {
      const emailFormData = new FormData(form);
      emailFormData.append("access_key", "2a3ad265-1c45-448d-bdfb-25b1be8fbe6c");
      emailFormData.append("subject", "New Quote Request - Glimmer Glass Cleaning");
      emailFormData.append("from_name", "Glimmer Glass Website");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailFormData
      });
    } catch (emailError) {
      console.error("Failed to send email notification", emailError);
    }

    setSubmitting(false);

    if (error) {
      toast({
        title: "Couldn't send your request",
        description: "Please try again or call us directly on 0424 811 607.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote request received",
      description: "Thanks! We'll be in touch within one business day.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-primary-glow blur-3xl" />
      </div>

      <div className="container mx-auto relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance mb-6 leading-tight">
            Free, no-obligation quote.
          </h2>
          <p className="text-primary-foreground/75 text-lg text-pretty mb-10 max-w-md">
            Tell us a little about your property and we'll come back with a fair,
            transparent price — usually within one business day.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  Service area
                </div>
                <div className="text-base font-medium">
                  Adelaide & surrounding suburbs, SA
                </div>
              </div>
            </li>
            <li>
              <a
                href="tel:0424811607"
                className="flex items-start gap-4 group"
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur group-hover:bg-accent group-hover:text-primary transition-smooth">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
                    Call or text
                  </div>
                  <div className="text-base font-medium group-hover:text-accent transition-smooth">
                    0424 811 607
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:glimmerglass21222@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur group-hover:bg-accent group-hover:text-primary transition-smooth">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
                    Email us
                  </div>
                  <div className="text-base font-medium break-all group-hover:text-accent transition-smooth">
                    glimmerglass21222@gmail.com
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-background text-foreground rounded-3xl p-8 lg:p-10 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="04xx xxx xxx" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="suburb">Suburb</Label>
                <Input id="suburb" name="suburb" required placeholder="e.g. Norwood" />
              </div>
            </div>

            <div className="space-y-2 mt-5">
              <Label htmlFor="message">Tell us about the job</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="e.g. Single-storey home, ~15 windows, inside & out."
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              disabled={submitting}
              className="w-full mt-8"
            >
              {submitting ? "Sending…" : (<>Request my free quote <Send /></>)}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              No obligation · No spam · Local Adelaide team
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};