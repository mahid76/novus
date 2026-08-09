import React, { useState } from 'react'
import { ShoppingCart, Phone } from "lucide-react";
import logo from '../../assets/logo.jpeg'
import Container from '../Layout/Container';

const Navbar = () => {
    const navLinks = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Services", href: "#" },
        { label: "Booking", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
    ];

    const [activeLink, setActiveLink] = useState("Blog");

    return (
        <header className="border-b-2 border-b-[#d4af37] bg-black">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <img className='max-w-15' src={logo} alt="" />
                    </a>

                    {/* Nav links */}
                    <ul className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveLink(link.label);
                                    }}
                                    className={
                                        activeLink === link.label
                                            ? "text-[#d4af37]"
                                            : "transition-colors hover:text-[#d4af37]"
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div className="hidden items-center gap-5 lg:flex">
                        <button
                            type="button"
                            aria-label="Cart"
                            className="text-white hover:text-[#d4af37]"
                        >
                            <ShoppingCart size={20} strokeWidth={1.75} />
                        </button>

                        <a
                            href="tel:+8801961727320"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4af37]"
                        >
                            <Phone size={18} strokeWidth={1.75} />
                            <p>+880 1961-727320</p>
                        </a>

                        <a
                            href="#"
                            className="rounded-md border border-[#d4af37] bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-400 hover:bg-black hover:text-[#d4af37]"
                        >
                            Book Consultation
                        </a>
                    </div>
                </nav>
            </Container >
        </header >
    )
}

export default Navbar
// import React from 'react'
// import { ShoppingCart, Phone } from "lucide-react";
// import logo from '../../assets/logo.jpeg'
// import Container from '../Layout/Container';

// const Navbar = () => {
//     const navLinks = [
//         { label: "Home", href: "#" },
//         { label: "About", href: "#" },
//         { label: "Services", href: "#" },
//         { label: "Booking", href: "#" },
//         { label: "Blog", href: "#", active: true },
//         { label: "Contact", href: "#" }
//     ];
//     return (
//         <header className="border-b-2 border-b-[#d4af37] bg-black">
//             <Container>
//                 <nav className="flex items-center justify-between py-3">
//                     {/* Logo */}
//                     <a href="#" className="flex items-center gap-3">
//                         <img className='max-w-[60px]' src={logo} alt="" />
//                     </a>

//                     {/* Nav links */}
//                     <ul className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
//                         {navLinks.map((link) => (
//                             <li key={link.label}>
//                                 <a
//                                     href={link.href}
//                                     className={
//                                         link.active
//                                             ? "text-[#d4af37]"
//                                             : "transition-colors hover:text-[#d4af37]"
//                                     }
//                                 >
//                                     {link.label}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Right side */}
//                     <div className="hidden items-center gap-5 lg:flex">
//                         <button
//                             type="button"
//                             aria-label="Cart"
//                             className="text-white hover:text-[#d4af37]"
//                         >
//                             <ShoppingCart size={20} strokeWidth={1.75} />
//                         </button>

//                         <a
//                             href="tel:+8801961727320"
//                             className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4af37]"
//                         >
//                             <Phone size={18} strokeWidth={1.75} />
//                             <p>+880 1961-727320</p>
//                         </a>

//                         <a
//                             href="#"
//                             className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
//                         >
//                             Book Consultation
//                         </a>
//                     </div>
//                 </nav>
//             </Container>
//         </header>
//     )
// }

// export default Navbar