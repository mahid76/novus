import React from "react";
import Container from "../Layout/Container";
import { useReveal } from "../../hooks/useReveal";

const features = [
  {
    num: "01",
    title: "Professional & Structured",
    desc: "Clear, organized reports and applications prepared for their exact intended purpose.",
  },
  {
    num: "02",
    title: "One-Stop Advisory",
    desc: "Financial documentation, tax & compliance, and overseas guidance under a single trusted group.",
  },
  {
    num: "03",
    title: "Confidential by Default",
    desc: "Every document and conversation is handled with strict professional confidentiality.",
  },
];

const WhyNovus = () => {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section className="py-20 sm:py-28 border-t border-hairline">
      <Container>
        <div
          ref={headRef}
          className={`max-w-md mx-auto text-center mb-14 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="font-tertiary text-[11px] tracking-[0.22em] uppercase text-primary flex items-center justify-center gap-2.5 before:content-[''] before:w-[22px] before:h-px before:bg-primary/40 after:content-[''] after:w-[22px] after:h-px after:bg-primary/40">
            Why Novus
          </div>
          <h2 className="font-secondary font-semibold text-ink text-[clamp(28px,4vw,44px)] leading-[1.12] mt-3">
            Built on documentation, delivered with care
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-10 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.num}
              style={{ transitionDelay: gridIn ? `${i * 100}ms` : "0ms" }}
              className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="font-secondary text-primary text-[34px] leading-none">
                {f.num}
              </div>
              <h4 className="font-primary font-semibold text-ink text-[17px] mt-4">
                {f.title}
              </h4>
              <p className="text-ink-dim text-[14px] leading-relaxed mt-2">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyNovus;