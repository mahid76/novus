import React from "react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import { useReveal } from "../../hooks/useReveal";

const CtaBand = () => {
  const [ref, inView] = useReveal();

  return (
    <section className="py-16">
      <Container>
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row items-center justify-between gap-6 bg-surface-2 border border-hairline rounded-sm px-8 py-10 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="text-center sm:text-left">
            <h3 className="font-secondary font-semibold text-ink text-[22px] leading-tight">
              Not sure which division you need?
            </h3>
            <p className="text-ink-dim text-[14px] mt-2">
              Book a short consultation — we&apos;ll guide you to the right
              service in minutes.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-primary text-[#0a0a09] font-semibold text-[13.5px] px-6 py-3 rounded-sm border border-primary transition-colors hover:bg-transparent hover:text-primary"
          >
            Book Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CtaBand;