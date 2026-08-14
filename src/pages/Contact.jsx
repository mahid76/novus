import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import {
    AlertCircle,
    CheckCircle2,
    ChevronDown,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    X,
} from "lucide-react";
import Container from "../components/Layout/Container";

const WHATSAPP_NUMBER = "8801601117737"; // international format, no "+" or leading zeros

/* ---------------------------------------------------------
   EmailJS config — https://www.emailjs.com

   Right now this uses ONE template ("Auto-Reply", ID
   template_d9l52ae) configured to arrive in your own Gmail
   (To Email = your address, Reply To = {{email}}). That's
   assigned to EMAILJS_TEMPLATE_ID_ADMIN below.

   To also send the VISITOR a confirmation email, create a
   second template where "To Email" = {{email}} (not fixed),
   then paste its ID into EMAILJS_TEMPLATE_ID_AUTOREPLY.
   Until you do, only the admin notification will be sent.
--------------------------------------------------------- */
const EMAILJS_SERVICE_ID = "service_9mzs2l2";
const EMAILJS_TEMPLATE_ID_ADMIN = "template_d9l52ae";
const EMAILJS_TEMPLATE_ID_AUTOREPLY = "template_6wb5l4x";
const EMAILJS_PUBLIC_KEY = "PN1zpgC0bKg7daZQF";

/* ---------------------------------------------------------
   Lightweight scroll-reveal hook (mirrors the HTML demo's
   .reveal behaviour using IntersectionObserver)
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

const DIVISIONS = ["Novus Advisory Firm", "Novus Tax", "Novus Overseas","Novus Translation Center", "Not sure yet"];

/* ---------------------------------------------------------
   Custom themed dropdown — replaces the native <select> so
   the open menu matches the dark theme instead of falling
   back to the browser's OS-styled list (white bg, blue hi-
   light). Fully keyboard + click-outside accessible.
--------------------------------------------------------- */
const DivisionSelect = ({ value, onChange, disabled, options }) => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    return (
        <div ref={wrapRef} className="relative">
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen((o) => !o)}
                onKeyDown={handleKeyDown}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`flex w-full items-center justify-between rounded-sm border bg-surface px-3.5 py-3 text-left text-sm text-ink outline-none transition-colors disabled:opacity-60 ${
                    open ? "border-primary" : "border-hairline"
                }`}
            >
                <span>{value}</span>
                <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                        open ? "rotate-180 text-primary" : ""
                    }`}
                />
            </button>

            {open && (
                <ul
                    role="listbox"
                    style={{ backgroundColor: "#1c1811" }}
                    className="absolute inset-x-0 top-full z-50 mt-1.5 overflow-hidden rounded-sm border border-hairline bg-surface shadow-2xl"
                >
                    {options.map((option) => {
                        const isSelected = option === value;
                        return (
                            <li key={option} role="option" aria-selected={isSelected}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(option);
                                        setOpen(false);
                                    }}
                                    style={{
                                        backgroundColor: isSelected
                                            ? "rgba(212,175,55,0.15)"
                                            : "#1c1811",
                                    }}
                                    className={`block w-full px-3.5 py-2.5 text-left text-sm transition-colors ${
                                        isSelected
                                            ? "text-primary"
                                            : "text-ink-dim hover:text-ink"
                                    }`}
                                    onMouseEnter={(e) => {
                                        if (!isSelected) e.currentTarget.style.backgroundColor = "#252017";
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSelected) e.currentTarget.style.backgroundColor = "#1c1811";
                                    }}
                                >
                                    {option}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

const infoRows = [
    {
        icon: Phone,
        label: "Call us",
        content: "+880 1601-117737",
        href: "tel:+8801601117737   ",
    },
    {
        icon: Mail,
        label: "Email",
        content: "info@novusgroup.com.bd",
        href: "mailto:info@novusgroup.com.bd",
    },
];

const hoursRow = {
    icon: Clock,
    label: "Hours",
    content: "Sat–Thu, 10:00 AM – 7:00 PM",
};

/* ---------------------------------------------------------
   Confirmation popup — shows success or error after submit
--------------------------------------------------------- */
const ConfirmationModal = ({ status, onClose }) => {
    if (status !== "success" && status !== "error") return null;

    const isSuccess = status === "success";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-sm rounded-sm border border-hairline bg-surface p-8 text-center shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 text-muted transition-colors hover:text-ink"
                >
                    <X size={18} />
                </button>

                <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${isSuccess ? "border-primary/50" : "border-red-400/50"
                        }`}
                >
                    {isSuccess ? (
                        <CheckCircle2 size={26} strokeWidth={1.8} className="text-primary" />
                    ) : (
                        <AlertCircle size={26} strokeWidth={1.8} className="text-red-400" />
                    )}
                </div>

                <h3 className="mt-5 font-secondary text-xl font-semibold text-ink">
                    {isSuccess ? "Message Sent" : "Something Went Wrong"}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-dim">
                    {isSuccess
                        ? "Thanks for reaching out. Your message has been delivered, and a confirmation has been sent to your email."
                        : "We couldn't send your message right now. Please try again, or reach us directly on WhatsApp."}
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 w-full rounded-sm border border-primary bg-primary px-6 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary"
                >
                    {isSuccess ? "Done" : "Close"}
                </button>
            </div>
        </div>
    );
};

const Contact = () => {
    const [headRef, headVisible] = useReveal();
    const [formRef, formVisible] = useReveal();

    const [form, setForm] = useState({
        name: "",
        email: "",
        division: DIVISIONS[0],
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");

        const templateParams = {
            // generic names (used if you customize templates later)
            from_name: form.name,
            from_email: form.email,
            to_email: form.email,
            division: form.division,
            message: form.message,
            // matches the EmailJS default "Auto-Reply" template fields
            name: form.name,
            email: form.email,
            title: form.division,
        };

        const autoreplyConfigured =
            EMAILJS_TEMPLATE_ID_AUTOREPLY !== "YOUR_AUTOREPLY_TEMPLATE_ID";

        try {
            // 1) Notify you (arrives in your Gmail)
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID_ADMIN,
                templateParams,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            // 2) Auto-confirmation back to the visitor (skipped until
            //    a real autoreply template ID is set above)
            if (autoreplyConfigured) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_AUTOREPLY,
                    templateParams,
                    { publicKey: EMAILJS_PUBLIC_KEY }
                );
            }

            setStatus("success");
            setForm({ name: "", email: "", division: DIVISIONS[0], message: "" });
        } catch (err) {
            console.error("EmailJS send failed:", err);
            setStatus("error");
        }
    };

    const closeModal = () => setStatus("idle");

    return (
        <div className="bg-bg">
            <ConfirmationModal status={status} onClose={closeModal} />

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
                        className={`transition-all duration-700 ease-out ${headVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                            }`}
                    >
                        <div className="font-tertiary text-[11px] uppercase tracking-[0.08em] text-muted">
                            <Link to="/" className="transition-colors hover:text-primary">
                                Home
                            </Link>
                            <span className="mx-2 text-primary">/</span>
                            <span>Contact</span>
                        </div>

                        <h1 className="mt-4 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
                            Get in Touch
                        </h1>

                        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim sm:text-base">
                            Questions about a service or which division fits your need? Send
                            a message and an advisor will respond.
                        </p>
                    </div>
                </Container>
            </div>

            {/* ============ FORM + CONTACT INFO ============ */}
            <section className="py-16 lg:py-20">
                <Container>
                    <div
                        ref={formRef}
                        className={`grid grid-cols-1 gap-12 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-[60px] ${formVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                            }`}
                    >
                        {/* Left: form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    disabled={status === "sending"}
                                    className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary disabled:opacity-60"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@email.com"
                                    required
                                    disabled={status === "sending"}
                                    className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary disabled:opacity-60"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
                                    Which division is this about?
                                </label>
                                <DivisionSelect
                                    value={form.division}
                                    onChange={(value) =>
                                        setForm((f) => ({ ...f, division: value }))
                                    }
                                    disabled={status === "sending"}
                                    options={DIVISIONS}
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you need help with"
                                    rows={5}
                                    required
                                    disabled={status === "sending"}
                                    className="w-full resize-y rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary disabled:opacity-60"
                                    style={{ minHeight: "110px" }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <Send size={15} strokeWidth={2} />
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Right: contact info */}
                        <div className="border-hairline pt-8 lg:border-l lg:pt-0 lg:pl-14">
                            {infoRows.map(({ icon: Icon, label, content, href }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-4 border-b border-hairline py-5 first:pt-0"
                                >
                                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-primary/40">
                                        <Icon size={16} strokeWidth={1.8} className="text-primary" />
                                    </div>
                                    <div>
                                        <b className="block font-primary text-[13.5px] text-ink">
                                            {label}
                                        </b>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="text-[13px] text-ink-dim transition-colors hover:text-primary"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <span className="text-[13px] text-ink-dim">{content}</span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Office row with external map link */}
                            <div className="flex items-center gap-4 border-b border-hairline py-5">
                                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-primary/40">
                                    <MapPin size={16} strokeWidth={1.8} className="text-primary" />
                                </div>
                                <div>
                                    <b className="block font-primary text-[13.5px] text-ink">Office</b>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Dhaka,Bangladesh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[13px] text-primary transition-colors hover:text-primary/80 hover:underline"
                                    >
                                        Dhaka, Bangladesh
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-3 w-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center gap-4 border-b border-hairline py-5">
                                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-primary/40">
                                    <Clock size={16} strokeWidth={1.8} className="text-primary" />
                                </div>
                                <div>
                                    <b className="block font-primary text-[13.5px] text-ink">
                                        {hoursRow.label}
                                    </b>
                                    <span className="text-[13px] text-ink-dim">{hoursRow.content}</span>
                                </div>
                            </div>

                            {/* WhatsApp quick chat */}
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                    "Hello Novus Group, I'd like to know more about your services."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center justify-center gap-2.5 rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary"
                            >
                                <MessageCircle size={16} strokeWidth={2} />
                                Chat on WhatsApp
                            </a>

                            {/* Map embed */}
                            <div
                                className="mt-6 overflow-hidden rounded-sm border border-hairline"
                                style={{ filter: "grayscale(.15) contrast(1.02)" }}
                            >
                                <iframe
                                    src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0, display: "block" }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Novus Group office location"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
