const words = [
  { text: "design.", outline: false },
  { text: "development.", outline: true },
  { text: "AI.", outline: false },
  { text: "apps.", outline: true },
  { text: "tailored.", outline: false },
  { text: "cost-effective.", outline: true },
];

export function Marquee() {
  return (
    <section
      aria-hidden
      className="overflow-hidden bg-white pb-24 sm:pb-32 select-none"
    >
      <div className="flex w-max animate-marquee gap-16 pr-16">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-16">
            {words.map((word) => (
              <span
                key={word.text}
                className={`whitespace-nowrap text-7xl font-semibold tracking-[-0.04em] sm:text-8xl lg:text-9xl ${
                  word.outline ? "text-outline" : "text-ink"
                }`}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
