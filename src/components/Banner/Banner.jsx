import React from 'react'
import { Check } from "lucide-react";
import { Link } from "react-router";
import Container from "../Layout/Container";

const includes = [
    "Documentation review",
    "Professional formatting",
    "Confidential handling",
    "Dedicated advisor",
];

const stats = [
    { value: "3", label: "Advisory Units" },
    { value: "20+", label: "Services Offered" },
    { value: "BD", label: "Serving Nationwide" },
];

const Banner = () => {
    return (
        <section className="bg-bg">
            <Container>
                <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
                    {/* Left column */}
                    <div>
                        <div className="flex items-center gap-3 font-tertiary text-xs uppercase tracking-[0.22em] text-primary">
                            <span className="h-px w-6 bg-primary" />
                            Three units · One trusted name
                        </div>

                        <h1 className="mt-6 font-secondary text-[clamp(38px,6vw,74px)] font-semibold leading-[1.04] text-ink">
                            Precise advice.
                            <br />
                            Proper{" "}
                            <span className="italic text-primary">documentation.</span>
                            <br />
                            Every step abroad.
                        </h1>

                        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-dim sm:text-base">
                            Novus Group brings together financial documentation, tax &amp;
                            corporate compliance, and overseas education &amp; visa
                            consultancy under one professionally managed name — built for
                            individuals, businesses, and students across Bangladesh.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <Link
                                to="/booking"
                            >
                                <button className="rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary">
                                    Book a Consultation
                                </button>
                            </Link>
                            <Link
                                to="/about"
                            >
                                <button className="rounded-sm border border-primary/40 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-primary hover:bg-surface">Learn About Novus</button>
                            </Link>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-10 sm:gap-14">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="font-secondary text-3xl font-semibold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 font-tertiary text-[11px] uppercase tracking-[0.08em] text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — info card */}
                    <div className="rounded-md border border-hairline bg-surface p-10">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary">
                                <Check size={16} strokeWidth={2.5} className="text-primary" />
                            </div>
                        </div>

                        <h3 className="mt-6 text-center font-secondary text-xl font-semibold text-ink">
                            Certified &amp; Structured
                        </h3>
                        <p className="mt-1 text-center font-tertiary text-[11px] uppercase tracking-[0.12em] text-muted">
                            What every engagement includes
                        </p>

                        <ul className="mt-8 divide-y divide-hairline border-t border-hairline">
                            {includes.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center justify-between py-4 text-sm text-primary"
                                >
                                    <span>{item}</span>
                                    <Check size={16} strokeWidth={2.5} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner