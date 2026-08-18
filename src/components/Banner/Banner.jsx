import React, { useEffect, useRef, useState } from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router";
import Container from "../Layout/Container";

const includes = [
    "Documentation review",
    "Professional formatting",
    "Confidential handling",
    "Dedicated advisor",
];

const stats = [
    { value: 4, suffix: "", label: "Advisory Units" },
    { value: 20, suffix: "+", label: "Services Offered" },
    { value: null, display: "BD", label: "Serving Nationwide" },
];

/* Generic fade + rise reveal, fires once on mount. */
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setShown(true));
        return () => cancelAnimationFrame(id);
    }, []);
    return (
        <Tag
            className={
                `transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ` +
                (shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0") +
                " " + className
            }
            style={{ transitionDelay: `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

/* Masked line-by-line heading reveal — each line slides up out of a clipped box. */
const RevealLines = ({ lines, baseDelay = 100, step = 110 }) => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setShown(true));
        return () => cancelAnimationFrame(id);
    }, []);
    return (
        <>
            {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                    <span
                        className={
                            "block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] " +
                            (line.className || "") + " " +
                            (shown ? "translate-y-0" : "translate-y-[110%]")
                        }
                        style={{ transitionDelay: `${baseDelay + i * step}ms` }}
                    >
                        {line.text}
                    </span>
                </span>
            ))}
        </>
    );
};

/* Counts a number up from 0 once it mounts. */
const CountUp = ({ to, suffix = "", duration = 1400, delay = 400 }) => {
    const [value, setValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (started.current) return;
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(eased * to));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, delay);
        return () => clearTimeout(timeout);
    }, [to, duration, delay]);

    return <>{value}{suffix}</>;
};

const Banner = () => {
    return (
        <section
            className="relative overflow-hidden bg-bg"
            style={{
                backgroundImage:
                    "radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
            }}
        >
            {/* scoped keyframes — no global/tailwind config changes needed */}
            <style>{`
                @keyframes novus-shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -60% 0; }
                }
                @keyframes novus-draw {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                @keyframes novus-spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes novus-glow {
                    0%, 100% { box-shadow: 0 2px 14px rgba(20,18,12,0.05), 0 0 0 rgba(212,175,55,0); }
                    50% { box-shadow: 0 2px 14px rgba(20,18,12,0.05), 0 0 26px rgba(212,175,55,0.14); }
                }
                .novus-shimmer-text {
                    background-image: linear-gradient(110deg, #b8892c 35%, #f6dfa0 50%, #b8892c 65%);
                    background-size: 250% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: novus-shimmer 2.6s ease-out 1;
                    animation-delay: 900ms;
                    animation-fill-mode: backwards;
                }
            `}</style>

            <Container>
                <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
                    {/* Left column */}
                    <div>
                        <Reveal
                            delay={0}
                            className="flex items-center gap-3 font-tertiary text-xs uppercase tracking-[0.22em] text-primary"
                        >
                            <span
                                className="h-px w-6 origin-left bg-primary [animation:novus-draw_600ms_ease-out_1_both]"
                                style={{ animationDelay: "150ms" }}
                            />
                            Four units · One trusted name
                        </Reveal>

                        <h1 className="mt-6 font-secondary text-[clamp(32px,6vw,74px)] font-semibold leading-[1.08] text-ink">
                            <RevealLines
                                lines={[
                                    { text: "Precise advice." },
                                    { text: "Proper" },
                                    { text: "documentation.", className: "italic novus-shimmer-text" },
                                    { text: "Every step abroad." },
                                ]}
                            />
                        </h1>

                        <Reveal
                            as="p"
                            delay={520}
                            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-dim sm:text-base"
                        >
                            Novus Group brings together financial documentation, tax &amp;
                            corporate compliance, and overseas education &amp; visa
                            consultancy under one professionally managed name — built for
                            individuals, businesses, and students across Bangladesh.
                        </Reveal>

                        <Reveal delay={620} className="mt-8 flex items-center gap-4">
                            <Link to="/booking" className="group relative overflow-hidden rounded-sm border border-primary bg-primary">
                                <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
                                <button className="relative px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 group-hover:text-black active:scale-95">
                                    Book a Consultation
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="rounded-sm border border-primary/40 px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-primary hover:bg-surface active:scale-95">
                                    Learn About Novus
                                </button>
                            </Link>
                        </Reveal>

                        <Reveal
                            delay={720}
                            className="mt-14 flex flex-wrap gap-10 sm:gap-14"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="group">
                                    <div className="font-secondary text-3xl font-semibold text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                                        {stat.value !== null ? (
                                            <CountUp to={stat.value} suffix={stat.suffix} delay={800} />
                                        ) : (
                                            stat.display
                                        )}
                                    </div>
                                    <div className="mt-1 font-tertiary text-[11px] uppercase tracking-[0.08em] text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </Reveal>
                    </div>

                    {/* Right column — info card */}
                    <Reveal
                        delay={300}
                        className="relative rounded-sm border border-primary/25 bg-surface p-10 [animation:novus-glow_4s_ease-in-out_infinite] before:content-[''] before:inset-[9px] before:border before:border-[#C69A426B] before:rounded before:absolute"
                    >
                        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full">
                            <svg
                                className="absolute inset-0 h-full w-full [animation:novus-spin-slow_9s_linear_infinite]"
                                viewBox="0 0 100 100"
                                fill="none"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    stroke="#C69A42"
                                    strokeOpacity="0.4"
                                    strokeWidth="1"
                                    strokeDasharray="6 10"
                                />
                            </svg>
                            <div className="absolute inset-[6px] rounded-full border border-primary/40" />
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/70">
                                <IoCheckmarkCircleOutline size={30} strokeWidth={2} className="text-primary" />
                            </div>
                        </div>

                        <h3 className="mt-6 text-center font-secondary text-xl font-semibold text-ink">
                            Certified &amp; Structured
                        </h3>
                        <p className="mt-1 text-center font-tertiary text-[11px] uppercase tracking-[0.12em] text-muted">
                            What every engagement includes
                        </p>

                        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
                            {includes.map((item, i) => (
                                <Reveal
                                    as="li"
                                    key={item}
                                    delay={650 + i * 90}
                                    className="group flex items-center justify-between py-4 text-sm text-ink transition-[padding-left,color] duration-300 hover:pl-1 hover:text-primary"
                                >
                                    <span>{item}</span>
                                    <span className="font-tertiary text-primary/80 transition-transform duration-300 group-hover:scale-125">
                                        ✓
                                    </span>
                                </Reveal>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}

export default Banner