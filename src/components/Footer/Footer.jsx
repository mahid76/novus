import React from "react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import { useReveal } from "../../hooks/useReveal";

const footerColumns = [
  {
    title: "Novus Advisory Firm",
    path: "/NovusAdvisoryFirm",
    links: [
      "Asset Valuation",
      "Tax Return Filing",
      "Net Worth Certificate",
      "Notary & Translation",
    ],
  },
  {
    title: "Novus Tax",
    path: "/NovusTax",
    links: [
      "Company Incorporation",
      "VAT Registration",
      "Internal Audit",
      "Business Valuation",
    ],
  },
  {
    title: "Novus Overseas",
    path: "/NovusOverseas",
    links: [
      "Student Visa",
      "University Selection",
      "Air Ticketing",
      "Tourist Visa",
    ],
  },
];

const Footer = () => {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className={`border-t border-hairline bg-bg pt-16 pb-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <Container>
        <div className="grid gap-10 grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center font-secondary font-bold text-primary text-[15px]">
                N
              </div>
              <div className="font-secondary text-[19px] tracking-wide text-ink font-semibold leading-tight">
                NOVUS
                <span className="block font-tertiary text-[9px] tracking-[0.28em] text-ink-dim font-normal mt-0.5">
                  GROUP
                </span>
              </div>
            </Link>
            <p className="text-ink-dim text-[13.5px] leading-relaxed mt-4 max-w-[280px]">
              Professional Advisory · Trusted Documentation · Reliable
              Solutions. Three divisions, one standard of professionalism.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className="font-tertiary text-[11px] tracking-[0.1em] uppercase text-primary mb-4">
                {col.title}
              </h5>
              {col.links.map((label) => (
                <Link
                  key={label}
                  to={col.path}
                  className="block text-ink-dim text-[13.5px] py-1.5 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-12 pt-6 border-t border-hairline text-muted text-[12px]">
          <span>© {year} Novus Group. All rights reserved.</span>
          <span>Dhaka, Bangladesh · +880 1961-727320</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;