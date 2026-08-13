import React from "react";
import { useNavigate } from "react-router";
import Container from "../Layout/Container";
import { useReveal } from "../../hooks/useReveal";

const divisions = [
  {
    tag: "DIVISION 01",
    title: "Novus Advisory Firm",
    desc: "Asset valuation, tax filing, net worth certification, fund explanation, audit, notary and translation — professional financial documentation for banking, immigration and official use.",
    tags: ["Valuation", "Net Worth", "Notary"],
    path: "/NovusAdvisoryFirm",
  },
  {
    tag: "DIVISION 02",
    title: "Novus Tax",
    desc: "Company incorporation, tax & VAT return, RJSC compliance, internal audit, payroll and business valuation — integrated support for businesses and organizations.",
    tags: ["VAT & RJSC", "Audit", "Payroll"],
    path: "/NovusTax",
  },
  {
    tag: "DIVISION 03",
    title: "Novus Overseas",
    desc: "Student visa & study abroad guidance, university selection, VFS & documentation support, air ticketing and tourist visa services for your journey beyond borders.",
    tags: ["Study Abroad", "Visa", "Travel"],
    path: "/NovusOverseas",
  },
];

const Divisions = () => {
  const navigate = useNavigate();
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div
          ref={headRef}
          className={`max-w-xl mb-14 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="font-tertiary text-[11px] tracking-[0.22em] uppercase text-primary flex items-center gap-2.5 before:content-[''] before:w-[22px] before:h-px before:bg-primary/40">
            The Group
          </div>
          <h2 className="font-secondary font-semibold text-ink text-[clamp(28px,4vw,44px)] leading-[1.12] mt-3">
            Three divisions, purpose-built for different needs
          </h2>
          <p className="text-ink-dim mt-4 leading-relaxed">
            Choose the division that matches what you need — or let us guide
            you if your requirement spans more than one.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {divisions.map((d, i) => (
            <div
              key={d.title}
              onClick={() => navigate(d.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(d.path)}
              style={{ transitionDelay: gridIn ? `${i * 100}ms` : "0ms" }}
              className={`group cursor-pointer bg-surface-2 border border-hairline rounded-sm p-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out hover:border-primary/40 hover:-translate-y-1 ${
                gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="font-tertiary text-[11px] tracking-[0.15em] uppercase text-primary">
                {d.tag}
              </span>
              <h3 className="font-secondary font-semibold text-ink text-[22px] mt-4">
                {d.title}
              </h3>
              <p className="text-ink-dim text-[14px] leading-relaxed mt-3">
                {d.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="font-tertiary text-[11px] tracking-wide uppercase text-muted border border-hairline rounded-sm px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-6 text-primary text-[13px] font-medium">
                Explore services
                <svg
                  viewBox="0 0 24 24"
                  className="w-[14px] h-[14px] stroke-primary fill-none transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Divisions;