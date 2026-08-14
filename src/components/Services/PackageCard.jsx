import React from "react";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../../data/servicesData";

const PackageCard = ({ pkg }) => {
  const message = `Hi Novus Group, I'm interested in the "${pkg.name}" package (${pkg.price}). It includes: ${pkg.features.join(
    ", "
  )}. Could you share more details?`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`relative flex flex-col rounded-sm border p-8 shadow-[0_2px_14px_rgba(0,0,0,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,.4)] ${
        pkg.featured
          ? "border-primary bg-[linear-gradient(180deg,rgba(212,175,55,.07),var(--surface)_40%)]"
          : "border-hairline bg-surface"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 font-tertiary text-[10px] font-semibold tracking-[0.08em] text-[#0a0a09]">
          Most Popular
        </span>
      )}

      <span className="font-tertiary text-[11px] uppercase tracking-[0.15em] text-primary">
        {pkg.tier}
      </span>
      <h3 className="mt-2.5 font-secondary text-xl font-semibold text-ink">
        {pkg.name}
      </h3>
      <div className="mt-2.5 font-secondary text-[15px] text-ink-dim">
        {pkg.price}
      </div>

      <ul className="mt-5 flex flex-grow flex-col gap-3">
        {pkg.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[13.5px] text-ink-dim"
          >
            <Check
              size={14}
              strokeWidth={2.2}
              className="mt-0.5 shrink-0 text-primary"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-5 py-3 text-[13.5px] font-semibold text-[#0a0a09] transition-colors duration-300 hover:bg-transparent hover:text-primary"
      >
        <MessageCircle size={16} strokeWidth={2} />
        Buy on WhatsApp
      </a>
    </div>
  );
};

export default PackageCard;
