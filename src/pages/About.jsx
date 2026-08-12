import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Award, Building2, FileCheck2, Globe2 } from "lucide-react";
import Container from "../components/Layout/Container";

/* ---------------------------------------------------------
   Lightweight scroll-reveal hook (mirrors the HTML demo's
   .reveal / .reveal-stagger behaviour using IntersectionObserver)
--------------------------------------------------------- */
const useReveal = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
};

const pillars = [
    {
        tag: "MISSION",
        title: "Simplify what's complex",
        text: "We make complex financial, regulatory and international-documentation requirements simple, organized and transparent.",
    },
    {
        tag: "VISION",
        title: "A trusted name in Bangladesh",
        text: "To be recognised for professional integrity, technical expertise, and consistent client satisfaction across all three divisions.",
    },
    {
        tag: "COMMITMENT",
        title: "Accuracy with care",
        text: "Every report, return, or application is prepared with professionalism, confidentiality and attention to detail.",
    },
];

const divisions = [
    {
        icon: FileCheck2,
        eyebrow: "Division 01",
        name: "Novus Advisory Firm",
        blurb:
            "Professional advisory and financial documentation — CA asset valuation, tax return filing, fund & income explanation, net worth certification, business audit, notary and translation.",
        focus:
            "Documentation-first: every report is built on supporting evidence and applicable valuation principles.",
        serves:
            "Individuals, entrepreneurs, professionals, investors, and organizations needing official documentation.",
        link: "/services",
    },
    {
        icon: Building2,
        eyebrow: "Division 02",
        name: "Novus Tax",
        blurb:
            "Integrated Tax, VAT, RJSC, Accounting, Audit, Payroll and Business Valuation services for businesses, entrepreneurs, companies and NGOs.",
        focus:
            "Integrated compliance: tax, VAT, RJSC and audit handled through one professional platform.",
        serves: "Companies, entrepreneurs, NGOs and other organizations across Bangladesh.",
        link: "/services",
    },
    {
        icon: Globe2,
        eyebrow: "Division 03",
        name: "Novus Overseas",
        blurb:
            "Overseas education, visa consultancy and travel support — from university selection to visa documentation, VFS submission and air ticketing.",
        focus: "Personalised, transparent guidance from application to departure and travel.",
        serves: "Students, visa applicants, and travelers planning international journeys.",
        link: "/services",
    },
];

/* Reusable eyebrow label (mono, tracked, gold rule) */
const Eyebrow = ({ children }) => (
    <div className="flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-[22px] bg-primary/60" />
        {children}
    </div>
);

/* Single division block — its own component so useReveal (a hook)
   can be called once per instance instead of inside a .map() loop */
const DivisionBlock = ({ division }) => {
    const Icon = division.icon;
    const [ref, visible] = useReveal();

    return (
        <div className="border-t border-hairline py-16 lg:py-20">
            <Container>
                <div
                    ref={ref}
                    className={`grid grid-cols-1 items-center gap-10 transition-all duration-700 ease-out lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    }`}
                >
                    {/* Left: identity */}
                    <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40">
                            <Icon size={20} strokeWidth={1.6} className="text-primary" />
                        </div>
                        <Eyebrow>{division.eyebrow}</Eyebrow>
                        <h2 className="mt-3 font-secondary text-2xl font-semibold text-ink sm:text-3xl">
                            {division.name}
                        </h2>
                        <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-dim">
                            {division.blurb}
                        </p>
                        <Link
                            to={division.link}
                            className="mt-6 inline-block rounded-sm border border-primary/40 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-primary hover:bg-surface"
                        >
                            View Services
                        </Link>
                    </div>

                    {/* Right: focus / serves */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-sm border border-hairline p-5">
                            <div className="mb-2.5 flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
                                <span className="h-px w-[22px] bg-primary/60" />
                                Focus
                            </div>
                            <p className="text-[13.5px] leading-relaxed text-ink-dim">
                                {division.focus}
                            </p>
                        </div>
                        <div className="rounded-sm border border-hairline p-5">
                            <div className="mb-2.5 flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
                                <span className="h-px w-[22px] bg-primary/60" />
                                Serves
                            </div>
                            <p className="text-[13.5px] leading-relaxed text-ink-dim">
                                {division.serves}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const About = () => {
    const [headRef, headVisible] = useReveal();
    const [pillarsRef, pillarsVisible] = useReveal();

    return (
        <div className="bg-bg">
            {/* ============ PAGE HEAD ============ */}
            <div
                className="relative overflow-hidden border-b border-hairline py-16 lg:py-24"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
                }}
            >
                <Container>
                    <div
                        ref={headRef}
                        className={`transition-all duration-700 ease-out ${
                            headVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                        }`}
                    >
                        <div className="font-tertiary text-[11px] uppercase tracking-[0.08em] text-muted">
                            <Link to="/" className="transition-colors hover:text-primary">
                                Home
                            </Link>
                            <span className="mx-2 text-primary">/</span>
                            <span>About</span>
                        </div>

                        <h1 className="mt-4 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
                            About Novus Group
                        </h1>

                        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-dim sm:text-base">
                            Novus Group is a Bangladesh-based professional group operating
                            through three specialised divisions — Novus Advisory Firm, Novus
                            Tax, and Novus Overseas — each focused on a distinct area of
                            financial, regulatory, and overseas-consultancy expertise, unified
                            by one standard of professionalism.
                        </p>
                    </div>
                </Container>
            </div>

            {/* ============ MISSION / VISION / COMMITMENT ============ */}
            <section className="py-16 lg:py-20">
                <Container>
                    <div
                        ref={pillarsRef}
                        className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3"
                    >
                        {pillars.map((p, i) => (
                            <div
                                key={p.tag}
                                className={`bg-bg p-8 transition-all duration-500 ease-out sm:p-9 ${
                                    pillarsVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-4 opacity-0"
                                }`}
                                style={{ transitionDelay: pillarsVisible ? `${i * 90}ms` : "0ms" }}
                            >
                                <div className="font-tertiary text-xs tracking-[0.1em] text-primary">
                                    {p.tag}
                                </div>
                                <h4 className="mt-3 font-secondary text-lg font-semibold text-ink">
                                    {p.title}
                                </h4>
                                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-dim">
                                    {p.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ============ DIVISIONS ============ */}
            {divisions.map((d) => (
                <DivisionBlock key={d.name} division={d} />
            ))}

            {/* ============ CLOSING STRIP ============ */}
            <section className="border-t border-hairline py-16 lg:py-20">
                <Container>
                    <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-primary/25 bg-surface p-10 sm:flex-row sm:items-center">
                        <div>
                            <div className="flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
                                <Award size={14} strokeWidth={2} />
                                One name, three units
                            </div>
                            <h3 className="mt-3 font-secondary text-xl font-semibold text-ink sm:text-2xl">
                                Speak with the right division for your need.
                            </h3>
                        </div>
                        <Link to="/contact" className="shrink-0">
                            <button className="rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary">
                                Book a Consultation
                            </button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About;
