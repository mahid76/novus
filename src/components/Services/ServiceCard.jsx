import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="group flex h-full cursor-pointer flex-col rounded-sm border border-hairline bg-surface p-7 shadow-[0_2px_14px_rgba(0,0,0,.3)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_34px_rgba(0,0,0,.4)]"
    >
      <span className="text-[26px] leading-none">{service.icon}</span>
      <h4 className="mt-4 font-secondary text-[16.5px] font-bold text-ink">
        {service.title}
      </h4>
      <p className="mt-2.5 flex-grow text-[13px] leading-relaxed text-ink-dim">
        {service.desc}
      </p>
      <div className="mt-4 flex items-center gap-1.5 font-tertiary text-[12.5px] tracking-[0.04em] text-primary">
        View Packages
        <ArrowRight
          size={13}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
