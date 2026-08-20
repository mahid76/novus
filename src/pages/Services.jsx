import React from "react";
import { useNavigate } from "react-router";
import Container from "../components/Layout/Container";
import { useReveal } from "../hooks/useReveal";
import { servicesData } from "../data/servicesData";
import advisoryLogo from "../assets/logos/novus-advisory-logo.jpeg";
import taxLogo from "../assets/logos/novus-tax-logo.jpeg";
import overseasLogo from "../assets/logos/novus-overseas-logo.jpeg";
import translationLogo from "../assets/logos/novus-translation-logo.svg";

const LOGOS = {
    "advisory-firm": advisoryLogo,
    tax: taxLogo,
    overseas: overseasLogo,
    "translation-centre": translationLogo,
};

const Services = () => {
    const navigate = useNavigate();
    const [headRef, headIn] = useReveal();
    const [gridRef, gridIn] = useReveal();

    const units = Object.entries(servicesData);

    return (
        <div>
            {/* Page header — same pattern as About/Contact/Booking */}
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
                            Home <span className="text-primary">/</span>{" "}
                            <span className="text-ink-dim">Services</span>
                        </div>
                        <h1 className="mt-3.5 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
                            Our Services
                        </h1>
                        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
                            Four divisions, each purpose-built for a different need. Pick
                            one below to see its full service list and packages.
                        </p>
                    </div>
                </Container>
            </div>

            {/* Division grid — same card + stagger pattern as the home page */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {units.map(([key, unit], i) => (
                            <div
                                key={key}
                                onClick={() => navigate(unit.path)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && navigate(unit.path)}
                                style={{ transitionDelay: gridIn ? `${i * 100}ms` : "0ms" }}
                                className={`group cursor-pointer rounded-sm border border-hairline bg-surface-2 p-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out hover:-translate-y-1 hover:border-primary/40 ${
                                    gridIn
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }`}
                            >
                                <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-primary/40">
                                    <img
                                        src={LOGOS[key]}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </span>
                                <span className="mt-4 block font-tertiary text-[11px] uppercase tracking-[0.15em] text-primary">
                                    {unit.tag}
                                </span>
                                <h3 className="mt-4 font-secondary text-[22px] font-semibold text-ink">
                                    {unit.title}
                                </h3>
                                <p className="mt-3 text-[14px] leading-relaxed text-ink-dim">
                                    {unit.intro}
                                </p>
                                <div className="mt-5 font-tertiary text-[11.5px] text-muted">
                                    {unit.services.length} services
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-primary">
                                    View services
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-[14px] w-[14px] fill-none stroke-primary transition-transform duration-200 group-hover:translate-x-1"
                                    >
                                        <path
                                            d="M5 12h14M13 6l6 6-6 6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Services;
