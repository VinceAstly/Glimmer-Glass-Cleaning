import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const photos = [
  { src: work1, alt: "Glimmer Glass Cleaning team member using a water-fed pole on a two-storey Adelaide home", span: "lg:row-span-2" },
  { src: work2, alt: "Adelaide job site with Glimmer Glass Cleaning ute and 'Window Cleaning In Progress' sign" , span: "lg:col-span-2"},
  { src: work3, alt: "Spotless interior window with a clear view through to the Adelaide sky" },
  { src: work4, alt: "Freshly cleaned residential solar panels on an Adelaide rooftop" },
  { src: work5, alt: "Modern two-storey Adelaide home with the Glimmer Glass Cleaning ute and signage on site" , span: "lg:col-span-2"},
  { src: work6, alt: "Contemporary brick and stone Adelaide home with Glimmer Glass Cleaning sign at the driveway" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Recent work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance mb-5">
            Adelaide homes, transformed.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A few of the homes we've left sparkling across the suburbs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-[240px] lg:auto-rows-[260px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-card group glass-shine ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};