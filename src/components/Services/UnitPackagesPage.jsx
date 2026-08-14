import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import Container from "../Layout/Container";
import { getUnit, getPackagesForService } from "../../data/servicesData";
import PackageCard from "./PackageCard";

const UnitPackagesPage = ({ unitKey }) => {
  const unit = getUnit(unitKey);
  const location = useLocation();
  const [activeId, setActiveId] = useState(unit?.services?.[0]?.id ?? "");
  const sectionRefs = useRef({});

  // Deep-link: if arriving with #service-id (from the Services page cards),
  // scroll to it once on mount.
  useEffect(() => {
    if (!unit) return;
    const hash = location.hash?.replace("#", "");
    if (hash && sectionRefs.current[hash]) {
      requestAnimationFrame(() => {
        sectionRefs.current[hash]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      setActiveId(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);

  // Scroll-spy: highlight the nav pill for whichever section is in view.
  useEffect(() => {
    if (!unit) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.serviceId);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [unit]);

  if (!unit) return null;

  const handleNavClick = (id) => {
    setActiveId(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* Page header + sticky-ish nav */}
      <div className="relative overflow-hidden border-b border-hairline pt-16 pb-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
          }}
        />
        <Container>
          <div className="relative">
            <div className="font-tertiary text-[11px] tracking-[0.08em] text-muted">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>{" "}
              <span className="text-primary">/</span>{" "}
              <Link to={unit.path} className="hover:text-primary">
                {unit.crumbLabel}
              </Link>{" "}
              <span className="text-primary">/</span>{" "}
              <span className="text-ink-dim">Packages</span>
            </div>
            <h1 className="mt-3.5 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
              {unit.title} — Packages
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
              {unit.packagesIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5 border-b border-hairline pb-7">
              {unit.services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleNavClick(s.id)}
                  className={`rounded-full border px-4 py-2.5 font-tertiary text-[12.5px] tracking-[0.03em] transition-colors ${
                    activeId === s.id
                      ? "border-primary text-primary"
                      : "border-hairline text-ink-dim hover:border-primary hover:text-primary"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Package sections, one per service */}
      <div>
        {unit.services.map((service) => {
          const pkgs = getPackagesForService(unitKey, service.title);
          return (
            <div
              key={service.id}
              id={`pkg-${service.id}`}
              data-service-id={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className="scroll-mt-24 border-b border-hairline py-16 sm:py-[70px]"
            >
              <Container>
                <div className="flex flex-wrap items-baseline justify-between gap-5">
                  <div>
                    <div className="font-tertiary text-[11px] tracking-[0.22em] uppercase text-primary">
                      {service.icon} Service
                    </div>
                    <h2 className="mt-2.5 font-secondary text-[clamp(24px,3vw,34px)] font-semibold text-ink">
                      {service.title}
                    </h2>
                  </div>
                  <div className="font-tertiary text-[11.5px] text-muted">
                    {pkgs.length} PACKAGES
                  </div>
                </div>

                <div className="mt-9 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
                  {pkgs.map((pkg) => (
                    <PackageCard key={pkg.name} pkg={pkg} />
                  ))}
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnitPackagesPage;
