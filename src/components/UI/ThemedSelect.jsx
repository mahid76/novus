import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------------------------------------------------
   Generic themed dropdown used across the site (Contact,
   Booking, etc). Renders its own list instead of a native
   <select> so the open menu always matches the active theme
   (light/dark) instead of falling back to the browser's OS
   styling. Relies on the bg-surface / bg-surface-2 tokens in
   index.css - both themes define solid, opaque values for
   these, so no inline color fallback is needed here.

   options: [{ value, label }]
--------------------------------------------------------- */
const ThemedSelect = ({ value, onChange, options, disabled, placeholder }) => {
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

    const selected = options.find((o) => o.value === value);

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
                className={`flex w-full items-center justify-between rounded-sm border bg-surface px-3.5 py-3 text-left text-sm outline-none transition-colors disabled:opacity-60 ${
                    open ? "border-primary" : "border-hairline"
                } ${selected ? "text-ink" : "text-muted"}`}
            >
                <span>{selected ? selected.label : placeholder}</span>
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
                    className="absolute inset-x-0 top-full z-50 mt-1.5 max-h-64 overflow-y-auto rounded-sm border border-hairline bg-surface shadow-2xl"
                >
                    {options.map((option) => {
                        const isSelected = option.value === value;
                        return (
                            <li key={option.value} role="option" aria-selected={isSelected}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setOpen(false);
                                    }}
                                    className={`block w-full px-3.5 py-2.5 text-left text-sm transition-colors ${
                                        isSelected
                                            ? "bg-primary/15 text-primary"
                                            : "bg-surface text-ink-dim hover:bg-surface-2 hover:text-ink"
                                    }`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default ThemedSelect;
