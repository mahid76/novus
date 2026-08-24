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
    <div className="relative flex h-[350px] w-full max-w-[380px] flex-col rounded-sm border border-hairline bg-surface p-8 shadow-[0_2px_14px_rgba(0,0,0,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,.4)]">
      <h3 className="font-secondary text-[24px] font-semibold text-ink">
        {pkg.name}
      </h3>
      {/* <div className="mt-2.5 font-secondary text-[28px] font-semibold text-primary">
        {pkg.price}
      </div> */}

      <ul className="mt-5 flex flex-1 flex-col gap-3 overflow-hidden">
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
            <span className="line-clamp-2">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex shrink-0 items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-5 py-3 text-[13.5px] font-semibold text-[#0a0a09] transition-colors duration-300 hover:bg-transparent hover:text-primary"
      >
        <MessageCircle size={16} strokeWidth={2} />
        Buy on WhatsApp
      </a>
    </div>
  );
};

export default PackageCard;
