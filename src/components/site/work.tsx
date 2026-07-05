"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, WordReveal } from "./reveal";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  link: string | null;
  // "contain" letterboxes the image instead of cropping — for portrait shots
  fit?: "contain";
};

const projects: Project[] = [
  {
    title: "Electoral Network",
    subtitle: "Government",
    image: "/images/work/electoral-2026.png",
    link: "https://electoralnetwork.org",
  },
  {
    title: "Patch",
    subtitle: "Hospitality Consultancy",
    image: "/images/work/patch.webp",
    link: "https://patchconsultancy.co.uk",
  },
  {
    title: "Met Office",
    subtitle: "Government",
    image: "/images/work/metoffice.jpg",
    link: null,
  },
  {
    title: "Xtra Loft Space",
    subtitle: "Construction",
    image: "/images/work/xtraloft.png",
    link: "https://www.xtraloftspace.com",
  },
  {
    title: "Zopa Bank",
    subtitle: "Banking",
    image: "/images/work/zopa.jpg",
    link: "https://www.zopa.com",
    fit: "contain",
  },
  {
    title: "Liberty Bell",
    subtitle: "Property Management",
    image: "/images/work/libertybell.png",
    link: "https://www.libertybellpm.co.uk",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flame">
                Selected work
              </p>
            </Reveal>
            <WordReveal
              text="Projects that engage and convert."
              className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
            />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => {
            const card = (
              <div className="group cursor-pointer">
                <div
                  className={`relative mb-5 overflow-hidden rounded-2xl border border-border ${
                    project.fit === "contain" ? "bg-nero" : "bg-muted"
                  }`}
                >
                  <div className="relative aspect-[16/10]">
                    {project.fit === "contain" && (
                      <Image
                        src={project.image}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="scale-125 object-cover blur-2xl brightness-90"
                      />
                    )}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={`${
                        project.fit === "contain"
                          ? "z-10 object-contain"
                          : "object-cover"
                      } transition-transform duration-700 ease-out group-hover:scale-105`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                  <span className="absolute right-4 top-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-peach/60 font-medium text-ink"
                  >
                    {project.subtitle}
                  </Badge>
                </div>
              </div>
            );

            return (
              <Reveal key={project.title} delay={(i % 2) * 0.1}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
