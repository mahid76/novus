import { ChevronDown, Moon, Phone, ShoppingCart, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.jpg";
import { useTheme } from "../../context/ThemeContext";
import Container from "../Layout/Container";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const closeTimer = useRef(null);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    const services = [
        {
            initials: "CA",
            title: "Novus Advisory Firm",
            subtitle: "Valuation · Tax · Documentation",
            href: "/NovusAdvisoryFirm",
        },
        {
            initials: "TX",
            title: "Novus Tax",
            subtitle: "Tax · VAT · RJSC · Audit",
            href: "/NovusTax",
        },
        {
            initials: "OS",
            title: "Novus Overseas",
            subtitle: "Study Abroad · Visa · Travel",
            href: "/NovusOverseas",
        },
    ];

    const closeMenu = () => setIsOpen(false);

    const { theme, toggle } = useTheme();
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const openServices = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setServicesOpen(true);
    };

    const scheduleCloseServices = () => {
        closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
    };

    const isServicesActive = location.pathname.startsWith("/services");

    return (
        <header
            className={
                "sticky top-0 z-50 border-b-2 border-b-primary bg-black/95 backdrop-blur-sm transition-all duration-300 " +
                (scrolled ? "shadow-lg shadow-black/40" : "")
            }
        >
            <Container>
                <nav
                    className={
                        "flex items-center justify-between transition-all duration400 " +
                        (scrolled ? "py-2" : "py-3")
                    }
                >
                    <Link
                        to="/"
                        className="group flex items-center gap-3"
                        onClick={closeMenu}
                    >
                        <img
                            className="max-w-30 transition-transform duration-400 ease-out group-hover:scale-105"
                            src={logo}
                            alt=""
                        />
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-7 text-sm font-medium text-[#c3bdac] lg:flex">
                        {(() => {
                            const link = navLinks[0];
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={
                                            "group relative font-primary inline-block py-1 transition-colors duration-300 " +
                                            (isActive
                                                ? "text-white"
                                                : "text-[#c3bdac] hover:text-white")
                                        }
                                    >
                                        {link.label}
                                        <span
                                            className={
                                                "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] " +
                                                (isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100")
                                            }
                                        />
                                    </Link>
                                </li>
                            );
                        })()}

                        {(() => {
                            const link = navLinks[1];
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={
                                            "group relative font-primary inline-block py-1 transition-colors duration-300 " +
                                            (isActive
                                                ? "text-white"
                                                : "text-[#c3bdac] hover:text-white")
                                        }
                                    >
                                        {link.label}
                                        <span
                                            className={
                                                "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] " +
                                                (isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100")
                                            }
                                        />
                                    </Link>
                                </li>
                            );
                        })()}

                        {/* Services dropdown trigger */}
                        <li
                            className="relative"
                            onMouseEnter={openServices}
                            onMouseLeave={scheduleCloseServices}
                        >
                            <div
                                className={
                                    "group relative flex items-center gap-1 font-primary py-1 transition-colors duration-300 " +
                                    (isServicesActive || servicesOpen
                                        ? "text-white"
                                        : "text-[#c3bdac] hover:text-white")
                                }
                            >
                                <button
                                    type="button"
                                    className="cursor-pointer"
                                >
                                    Services
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setServicesOpen((prev) => !prev)}
                                    aria-expanded={servicesOpen}
                                    aria-label="Toggle services menu"
                                    className="p-0.5"
                                >
                                    <ChevronDown
                                        size={15}
                                        strokeWidth={2}
                                        className={
                                            "transition-transform duration-300 " +
                                            (servicesOpen ? "rotate-180" : "rotate-0")
                                        }
                                    />
                                </button>
                                <span
                                    className={
                                        "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] " +
                                        (isServicesActive
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100")
                                    }
                                />
                            </div>

                            {/* Dropdown panel */}
                            <div
                                className={
                                    "absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition-all duration-200 ease-out " +
                                    (servicesOpen
                                        ? "translate-y-0 opacity-100 visible"
                                        : "-translate-y-1 opacity-0 invisible")
                                }
                            >
                                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-xl shadow-black/50">
                                    <ul className="divide-y divide-white/10">
                                        {services.map((service) => (
                                            <li key={service.title}>
                                                <Link
                                                    to={service.href}
                                                    onClick={() => setServicesOpen(false)}
                                                    className="group/item flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/5"
                                                >
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/60 text-xs font-semibold tracking-wide text-primary transition-transform duration-300 group-hover/item:scale-105">
                                                        {service.initials}
                                                    </span>
                                                    <span className="flex flex-col">
                                                        <span className="font-primary text-sm font-semibold text-white">
                                                            {service.title}
                                                        </span>
                                                        <span className="text-xs text-white/50">
                                                            {service.subtitle}
                                                        </span>
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {(() => {
                            const link = navLinks[2];
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={
                                            "group relative font-primary inline-block py-1 transition-colors duration-300 " +
                                            (isActive
                                                ? "text-white"
                                                : "text-[#c3bdac] hover:text-white")
                                        }
                                    >
                                        {link.label}
                                        <span
                                            className={
                                                "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] " +
                                                (isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100")
                                            }
                                        />
                                    </Link>
                                </li>
                            );
                        })()}
                    </ul>

                    {/* Desktop right side */}
                    <div className="hidden items-center gap-5 lg:flex">
                        {/* <button
                            type="button"
                            aria-label="Cart"
                            className="text-[#c3bdac] transition-transform duration-400 hover:scale-110 hover:text-primary"
                        >
                            <ShoppingCart size={20} strokeWidth={1.75} />
                        </button> */}
                        <button
                            onClick={toggle}
                            className="text-[#c3bdac] hover:text-primary transition-colors"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a
                            href="tel:+8801961727320"
                            className="flex items-center gap-2 text-sm font-medium font-primary text-[#c3bdac] transition-colors duration-300 hover:text-white"
                        >
                            <Phone
                                size={18}
                                strokeWidth={1.75}
                                className="transition-transform duration-400 group-hover:rotate-12"
                            />
                            <p>+880 1961-727320</p>
                        </a>
                        <Link
                            to="/booking"
                            className="relative overflow-hidden rounded-md border border-primary font-primary bg-primary px-5 py-2.5 text-sm font-semibold text-black transition-all duration400 hover:bg-black hover:text-primary hover:shadow-md hover:shadow-primary/30"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile right side: cart + animated hamburger */}
                    <div className="flex items-center gap-4 lg:hidden">
                        {/* <button
							type="button"
							aria-label="Cart"
							className="text-white transition-transform duration-300 hover:scale-110 hover:text-primary"
						>
							<ShoppingCart size={20} strokeWidth={1.75} />
						</button> */}
                        <button
                            type="button"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="relative flex h-6 w-7 flex-col items-center justify-center gap-[5px]"
                        >
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration400 ease-in-out " +
                                    (isOpen ? "translate-y-[7px] rotate-45 bg-primary" : "")
                                }
                            />
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration-400 ease-in-out " +
                                    (isOpen ? "scale-x-0 opacity-0" : "opacity-100")
                                }
                            />
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration-400 ease-in-out " +
                                    (isOpen ? "-translate-y-[7px] -rotate-45 bg-primary" : "")
                                }
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile menu panel */}
                <div
                    className={
                        "grid overflow-hidden transition-all duration400 ease-out lg:hidden " +
                        (isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0")
                    }
                >
                    <div className="overflow-hidden">
                        <ul className="flex flex-col gap-1 border-t border-primary/20 py-4 text-sm font-medium text-[#c3bdac]">
                            {[navLinks[0], navLinks[1]].map((link, i) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <li
                                        key={link.label}
                                        className={
                                            "transition-all duration-400 ease-out " +
                                            (isOpen
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-3 opacity-0")
                                        }
                                        style={{
                                            transitionDelay: isOpen ? `${i * 60 + 80}ms` : "0ms",
                                        }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={closeMenu}
                                            className={
                                                "font-primary block rounded-md px-2 py-2.5 transition-colors duration-400 " +
                                                (isActive
                                                    ? "text-white"
                                                    : "text-[#c3bdac] hover:text-white")
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* Mobile Services accordion */}
                            <li
                                className={
                                    "transition-all duration-400 ease-out " +
                                    (isOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-3 opacity-0")
                                }
                                style={{ transitionDelay: isOpen ? "140ms" : "0ms" }}
                            >
                                <div
                                    className={
                                        "font-primary flex w-full items-center justify-between rounded-md px-2 py-2.5 transition-colors duration-400 " +
                                        (isServicesActive || servicesOpen
                                            ? "text-white"
                                            : "text-[#c3bdac] hover:text-white")
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={() => setServicesOpen((prev) => !prev)}
                                        aria-expanded={servicesOpen}
                                        className="flex-1 text-left"
                                    >
                                        Services
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setServicesOpen((prev) => !prev)}
                                        aria-expanded={servicesOpen}
                                        aria-label="Toggle services menu"
                                        className="p-1"
                                    >
                                        <ChevronDown
                                            size={16}
                                            strokeWidth={2}
                                            className={
                                                "transition-transform duration-300 " +
                                                (servicesOpen ? "rotate-180" : "")
                                            }
                                        />
                                    </button>
                                </div>
                                <div
                                    className={
                                        "grid overflow-hidden transition-all duration-300 ease-out " +
                                        (servicesOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0")
                                    }
                                >
                                    <div className="overflow-hidden">
                                        <ul className="mt-1 flex flex-col gap-1 rounded-md bg-[#141414] p-2">
                                            {services.map((service) => (
                                                <li key={service.title}>
                                                    <Link
                                                        to={service.href}
                                                        onClick={() => {
                                                            setServicesOpen(false);
                                                            closeMenu();
                                                        }}
                                                        className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                                                    >
                                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/60 text-[10px] font-semibold text-primary">
                                                            {service.initials}
                                                        </span>
                                                        <span className="flex flex-col">
                                                            <span className="font-primary text-sm font-semibold text-white">
                                                                {service.title}
                                                            </span>
                                                            <span className="text-xs text-white/50">
                                                                {service.subtitle}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {(() => {
                                const link = navLinks[2];
                                const isActive = location.pathname === link.href;
                                return (
                                    <li
                                        key={link.label}
                                        className={
                                            "transition-all duration-400 ease-out " +
                                            (isOpen
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-3 opacity-0")
                                        }
                                        style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={closeMenu}
                                            className={
                                                "font-primary block rounded-md px-2 py-2.5 transition-colors duration-400 " +
                                                (isActive
                                                    ? "text-white"
                                                    : "text-[#c3bdac] hover:text-white")
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })()}
                        </ul>

                        <div
                            className={
                                "flex flex-col gap-4 border-t border-primary/20 py-4 transition-all duration400 ease-out " +
                                (isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-2 opacity-0")
                            }
                            style={{
                                transitionDelay: isOpen
                                    ? `${navLinks.length * 60 + 100}ms`
                                    : "0ms",
                            }}
                        >
                            <a
                                href="tel:+8801961727320"
                                className="flex items-center gap-2 px-2 text-sm font-medium font-primary text-[#c3bdac] transition-colors duration-400 hover:text-white"
                            >
                                <Phone size={18} strokeWidth={1.75} />
                                <p>+880 1961-727320</p>
                            </a>
                            <Link
                                to="/booking"
                                onClick={closeMenu}
                                className="mx-2 rounded-md border border-primary font-primary bg-primary px-5 py-2.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-primary active:scale-95"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
