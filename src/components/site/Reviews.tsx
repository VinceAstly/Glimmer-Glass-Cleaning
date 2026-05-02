import { useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  { name: "Shaun", when: "2 days ago", body: "Excellent and friendly service provided. Did a great job on the windows that were cleaned. Would recommend." },
  { name: "Mark Farrows", when: "3 days ago", body: "Carl is very professional and did a great job." },
  { name: "Annemarie Plachtej", when: "6 days ago", body: "Was very happy with the service — will do a maintenance programme with this firm. Very polite and courteous service and a good price. Thank you." },
  { name: "Sue Wellington", when: "2 weeks ago", body: "Great service, good communication, and very good results delivered quickly and on time. Many thanks." },
  { name: "Janet Williams", when: "12 weeks ago", body: "Fantastic window clean completed today by Glimmer Glass Cleaning. Plus prompt and friendly service. Highly recommend." },
  { name: "Matthew O'Dell", when: "13 weeks ago", body: "Amazing job! Would definitely use again!" },
  { name: "Rebecca Roccisano", when: "16 weeks ago", body: "Amazing service from Kyle and the team — so professional and tidy. Our windows have never looked cleaner. Will be recommending to all our family and friends." },
  { name: "MR JO Fabrics", when: "27 weeks ago", body: "They were doing a job in the neighbourhood and managed to fit us in. Professional, well mannered and attention to details. We are very impressed how clean the windows are. Thank you." },
  { name: "Shahida K", when: "29 weeks ago", body: "Khyle is an absolute gem. He deep cleaned all our windows with impeccable detail. You can really see that he takes a lot of pride in his work." },
  { name: "Jazz Edwards", when: "29 weeks ago", body: "Wonderful job by Kyle and Riley! 2 hours to clean 37 windows on 2 story house! Professional, friendly service at a competitive rate!" },
  { name: "Killik Pham", when: "29 weeks ago", body: "Khyle and Riley were professional and well mannered. The windows had been neglected for so long the guys brought them back to as good as new. Thanks guys." },
  { name: "Glen Abeywardena", when: "30 weeks ago", body: "Did a great job, highly recommend!" },
  { name: "John Vaezi", when: "31 weeks ago", body: "Great guys, reasonably priced and got the job done quickly and my windows are cleaner than they have ever been! I've now set them up for regular cleaning." },
  { name: "Helen Fuller", when: "34 weeks ago", body: "I'm so impressed with the job Glimmer Glass Clean have done, after months of neighbours renovating and nearby roadworks our windows look brand new again." },
  { name: "Gabbie Zizzo", when: "34 weeks ago", body: "Khyle did a terrific job cleaning our windows. Fantastic customer service and communication. A pleasure to hire Khyle — we'll definitely be having him back! Highly recommended." },
  { name: "Grace Mcdonald", when: "36 weeks ago", body: "These boys do a great job. Polite and trustworthy, always do that little bit extra." },
  { name: "Ybañez, James", when: "37 weeks ago", body: "I hired Glimmer Window Cleaning to clean the windows at my house, and they did an amazing job! The team was on time, professional and thorough." },
];

export const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Real Google reviews
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">
              Loved by Adelaide locals.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary border border-border">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">5.0 on Google</span>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous review"
                className="h-11 w-11 rounded-full border border-border bg-card hover:bg-secondary transition-smooth flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next review"
                className="h-11 w-11 rounded-full border border-border bg-card hover:bg-secondary transition-smooth flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden -mx-3" ref={emblaRef}>
          <div className="flex">
            {reviews.map((r) => (
              <div
                key={r.name + r.when}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
              >
                <article className="relative p-7 rounded-2xl bg-card border border-border shadow-card h-full flex flex-col">
                  <Quote className="absolute top-5 right-5 h-7 w-7 text-accent/30" />
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-pretty mb-6 flex-1">
                    "{r.body}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-base">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.when}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {reviews.length} verified reviews · auto-rotating
        </p>
      </div>
    </section>
  );
};