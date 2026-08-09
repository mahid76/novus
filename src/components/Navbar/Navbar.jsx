import React from 'react'
import { Link, useLocation } from "react-router";
import { ShoppingCart, Phone } from "lucide-react";
import logo from '../../assets/logo.jpeg'
import Container from '../Layout/Container';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
    ];

    return (
        <header className="border-b-2 border-b-primary bg-black">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    <Link to="/" className="flex items-center gap-3">
                        <img className='max-w-15' src={logo} alt="" />
                    </Link>

                    <ul className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
{/* List item with hover effect and active state */}
                                    <Link
                                        to={link.href}
                                        className={
                                            "group relative font-primary inline-block py-1 transition-colors duration-300 " +
                                            (isActive ? "text-primary" : "text-white hover:text-primary")
                                        }
                                    >
                                        {link.label}
{/* hove line */}
                                        <span
                                            className={
                                                "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ease-out " +
                                                (isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")
                                            }
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden items-center gap-5 lg:flex">
{/* button cart */}
                        <button type="button" aria-label="Cart" className="text-white hover:text-primary">
                            <ShoppingCart size={20} strokeWidth={1.75} />
                        </button>
                        <a href="tel:+8801961727320" className="flex items-center gap-2 text-sm font-medium font-primary text-white hover:text-primary">
                            <Phone size={18} strokeWidth={1.75} />
                            <p>+880 1961-727320</p>
                        </a>
                        <Link to="/booking" className="rounded-md border border-primary font-primary bg-primary px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-primary">
                            Book Consultation
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar