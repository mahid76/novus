import React from "react";
import { Link, useNavigate } from "react-router";
import Container from "../Layout/Container";
import { useReveal } from "../../hooks/useReveal";
import { getUnit } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const UnitServicesPage = ({ unitKey }) => {
  const unit = getUnit(unitKey);
  const navigate = useNavigate();
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  if (!unit) return null;

  return (
    <div>
      {/* Page header */}
      <div className="relative overflow-hidden border-b border-hairline pt-16 pb-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
          }}
        />
        <Container>
          <div
            ref={headRef}
            className={`relative motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="font-tertiary text-[11px] tracking-[0.08em] text-muted">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>{" "}
              <span className="text-primary">/</span>{" "}
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>{" "}
              <span className="text-primary">/</span>{" "}
              <span className="text-ink-dim">{unit.crumbLabel}</span>
            </div>
            <h1 className="mt-3.5 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
              {unit.title}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
              {unit.intro}
            </p>
          </div>
        </Container>
      </div>

      {/* Services grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div ref={gridRef} className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {unit.services.map((service, i) => (
              <div
                key={service.id}
                style={{ transitionDelay: gridIn ? `${i * 90}ms` : "0ms" }}
                className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                  gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <ServiceCard
                  service={service}
                  onClick={() =>
                    navigate(`${unit.path}/packages#${service.id}`)
                  }
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default UnitServicesPage;
