import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router";
import Container from "../Layout/Container";
import bannerImg1 from "../../assets/BannerImg/tax.jpg"
import bannerImg2 from "../../assets/BannerImg/documentatio.jpg"
import bannerImg3 from "../../assets/BannerImg/study.jpg"

const stats = [
    { value: 4, suffix: "", label: "Units" },
    { value: 20, suffix: "+", label: "Services Offered" },
    { value: 500, suffix: "+", label: "Clients Served" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 12, suffix: "+", label: "Expert Instructors" },
    { value: null, display: "24h", label: "Response Time" },
];

/* Replace these with your real image paths (e.g. import from /src/assets) */
const slides = [
    {
        src: bannerImg1,
        caption: "Tax & corporate compliance.",
    },
    {
        src: bannerImg2,
        caption: "Documentation, done right.",
    },
    {
        src: bannerImg3,
        caption: "Study & visa consultancy.",
    },
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

/* Draggable (mouse + touch) horizontal carousel with ken-burns zoom on the active slide, pauses on hover/drag. */
const ImageSlider = ({ items, interval = 4000 }) => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [dragX, setDragX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const trackRef = useRef(null);
    const startXRef = useRef(0);
    const widthRef = useRef(1);

    useEffect(() => {
        if (paused || dragging || items.length <= 1) return;
        const id = setInterval(() => {
            setActive((i) => (i + 1) % items.length);
        }, interval);
        return () => clearInterval(id);
    }, [paused, dragging, items.length, interval]);

    const goTo = (i) => setActive((i + items.length) % items.length);

    const handlePointerDown = (e) => {
        widthRef.current = trackRef.current?.offsetWidth || 1;
        startXRef.current = e.clientX;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        setDragging(true);
        setPaused(true);
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;
        setDragX(e.clientX - startXRef.current);
    };

    const endDrag = () => {
        if (!dragging) return;
        const threshold = widthRef.current * 0.15;
        if (dragX <= -threshold) goTo(active + 1);
        else if (dragX >= threshold) goTo(active - 1);
        setDragX(0);
        setDragging(false);
        setTimeout(() => setPaused(false), 300);
    };

    return (
        <div
            className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-sm bg-surface"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
                setPaused(false);
                if (dragging) endDrag();
            }}
        >
            <div
                ref={trackRef}
                className={
                    "flex h-full cursor-grab touch-pan-y active:cursor-grabbing " +
                    (dragging ? "" : "transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]")
                }
                style={{
                    transform: `translateX(calc(${-active * 100}% + ${dragX}px))`,
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
            >
                {items.map((slide, i) => (
                    <div key={slide.src} className="relative h-full w-full flex-none">
                        <img
                            src={slide.src}
                            alt={slide.caption || ""}
                            draggable={false}
                            className={
                                "h-full w-full object-cover transition-transform duration-[7000ms] ease-linear " +
                                (i === active && !dragging ? "scale-110" : "scale-100")
                            }
                        />
                        {/* subtle gradient so caption/dots stay legible over any image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                        {slide.caption && (
                            <p className="absolute bottom-6 left-6 right-6 font-secondary text-sm font-medium text-white sm:text-base">
                                {slide.caption}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* progress-style dots */}
            {items.length > 1 && (
                <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            className="group pointer-events-auto relative h-1.5 w-6 overflow-hidden rounded-full bg-white/30"
                        >
                            <span
                                className={
                                    "absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] " +
                                    (i === active && !paused
                                        ? "w-full duration-[4000ms] ease-linear"
                                        : i === active
                                        ? "w-full duration-300"
                                        : "w-0 duration-300")
                                }
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
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
                            className="mt-14 grid grid-cols-3 gap-x-8 gap-y-8 sm:gap-x-10 sm:gap-y-10"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="group">
                                    <div className="font-secondary text-2xl font-semibold text-primary transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-3xl">
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

                    {/* Right column — image slider inside the original bordered card */}
                    <Reveal
                        delay={300}
                        className="rounded-sm border border-primary/25 bg-surface p-3 animation-[novus-glow_4s_ease-in-out_infinite]"
                    >
                        <ImageSlider items={slides} />
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}

export default Banner