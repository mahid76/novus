import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router";
import { ShoppingCart, Phone } from "lucide-react";
import logo from '../../assets/logo.jpeg';
import Container from '../Layout/Container';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
    ];

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
                        "flex items-center justify-between transition-all duration-300 " +
                        (scrolled ? "py-2" : "py-3")
                    }
                >
                    <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
                        <img
                            className="max-w-15 transition-transform duration-300 ease-out group-hover:scale-105"
                            src={logo}
                            alt=""
                        />
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={
                                            "group relative font-primary inline-block py-1 transition-colors duration-300 " +
                                            (isActive ? "text-primary" : "text-white hover:text-primary")
                                        }
                                    >
                                        {link.label}
                                        <span
                                            className={
                                                "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] " +
                                                (isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")
                                            }
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop right side */}
                    <div className="hidden items-center gap-5 lg:flex">
                        <button
                            type="button"
                            aria-label="Cart"
                            className="text-white transition-transform duration-300 hover:scale-110 hover:text-primary"
                        >
                            <ShoppingCart size={20} strokeWidth={1.75} />
                        </button>
                        <a
                            href="tel:+8801961727320"
                            className="flex items-center gap-2 text-sm font-medium font-primary text-white transition-colors duration-300 hover:text-primary"
                        >
                            <Phone size={18} strokeWidth={1.75} className="transition-transform duration-300 group-hover:rotate-12" />
                            <p>+880 1961-727320</p>
                        </a>
                        <Link
                            to="/booking"
                            className="relative overflow-hidden rounded-md border border-primary font-primary bg-primary px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-primary hover:shadow-md hover:shadow-primary/30"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile right side: cart + animated hamburger */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            type="button"
                            aria-label="Cart"
                            className="text-white transition-transform duration-300 hover:scale-110 hover:text-primary"
                        >
                            <ShoppingCart size={20} strokeWidth={1.75} />
                        </button>
                        <button
                            type="button"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="relative flex h-6 w-7 flex-col items-center justify-center gap-[5px]"
                        >
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ease-in-out " +
                                    (isOpen ? "translate-y-[7px] rotate-45 bg-primary" : "")
                                }
                            />
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ease-in-out " +
                                    (isOpen ? "scale-x-0 opacity-0" : "opacity-100")
                                }
                            />
                            <span
                                className={
                                    "block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ease-in-out " +
                                    (isOpen ? "-translate-y-[7px] -rotate-45 bg-primary" : "")
                                }
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile menu panel */}
                <div
                    className={
                        "grid overflow-hidden transition-all duration-300 ease-out lg:hidden " +
                        (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                    }
                >
                    <div className="overflow-hidden">
                        <ul className="flex flex-col gap-1 border-t border-primary/20 py-4 text-sm font-medium text-white">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <li
                                        key={link.label}
                                        className={
                                            "transition-all duration-300 ease-out " +
                                            (isOpen
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-3 opacity-0")
                                        }
                                        style={{ transitionDelay: isOpen ? `${i * 60 + 80}ms` : "0ms" }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={closeMenu}
                                            className={
                                                "font-primary block rounded-md px-2 py-2.5 transition-colors duration-300 " +
                                                (isActive ? "text-primary" : "text-white hover:text-primary")
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div
                            className={
                                "flex flex-col gap-4 border-t border-primary/20 py-4 transition-all duration-300 ease-out " +
                                (isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")
                            }
                            style={{ transitionDelay: isOpen ? `${navLinks.length * 60 + 100}ms` : "0ms" }}
                        >
                            <a
                                href="tel:+8801961727320"
                                className="flex items-center gap-2 px-2 text-sm font-medium font-primary text-white transition-colors duration-300 hover:text-primary"
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
    )
}

export default Navbar