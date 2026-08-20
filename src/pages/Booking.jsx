import { Award, CalendarClock, CheckCircle2 } from "lucide-react";
import React, { useMemo, useState } from "react";
import Container from "../components/Layout/Container";
import ThemedSelect from "../components/UI/ThemedSelect";
import { useTheme } from "../context/ThemeContext";
import { servicesData } from "../data/servicesData";
import { useReveal } from "../hooks/useReveal";

// Same number used on the Contact page's WhatsApp button.
const WHATSAPP_NUMBER = "8801886811862";

const DIVISION_OPTIONS = Object.entries(servicesData).map(([key, unit]) => ({
	value: key,
	label: unit.title,
}));

const TIME_NOTE =
	"Choose any time that works for you — we'll confirm availability.";

// Converts a 24h "HH:MM" input value into a friendly 12h label
// for the WhatsApp message (e.g. "14:30" -> "2:30 PM").
function formatTime12h(value) {
	if (!value) return "Not specified";
	const [hStr, mStr] = value.split(":");
	let h = parseInt(hStr, 10);
	const period = h >= 12 ? "PM" : "AM";
	h = h % 12 || 12;
	return `${h}:${mStr} ${period}`;
}

const infoRows = [
	{
		icon: CheckCircle2,
		title: "Free first consultation",
		desc: "15–20 minute discovery call, no obligation.",
	},
	{
		icon: CalendarClock,
		title: "Flexible scheduling",
		desc: "In-person at our office or over a phone/video call.",
	},
	{
		icon: Award,
		title: "Right advisor, first time",
		desc: "We route you to the division and specialist that fits your need.",
	},
];

const Booking = () => {
	const { theme } = useTheme();
	const [headRef, headVisible] = useReveal();
	const [formRef, formVisible] = useReveal();

	const [form, setForm] = useState({
		name: "",
		phone: "",
		division: DIVISION_OPTIONS[0].value,
		service: "",
		date: "",
		time: "",
	});

	const serviceOptions = useMemo(() => {
		const unit = servicesData[form.division];
		return (unit?.services ?? []).map((s) => ({
			value: s.title,
			label: s.title,
		}));
	}, [form.division]);

	const handleChange = (field, value) => {
		setForm((f) => {
			if (field === "division") {
				const unit = servicesData[value];
				return {
					...f,
					division: value,
					service: unit?.services?.[0]?.title ?? "",
				};
			}
			return { ...f, [field]: value };
		});
	};

	// Keep a valid default service selected once options are known.
	React.useEffect(() => {
		if (!form.service && serviceOptions.length > 0) {
			setForm((f) => ({ ...f, service: serviceOptions[0].value }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [serviceOptions]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const unitTitle = servicesData[form.division]?.title ?? "";
		const message = `Hi Novus Group, I'd like to book a consultation.
Name: ${form.name}
Phone: ${form.phone}
Division: ${unitTitle}
Service: ${form.service}
Preferred Date: ${form.date || "Not specified"}
Preferred Time: ${formatTime12h(form.time)}`;
		const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
			message,
		)}`;
		window.open(waHref, "_blank", "noopener,noreferrer");
	};

	return (
		<div>
			{/* Page header */}
			<div className="relative overflow-hidden border-b border-hairline pt-16 pb-14">
				<div
					className="pointer-events-none absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
					}}
				/>
				<Container>
					<div
						ref={headRef}
						className={`relative motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
							headVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-5"
						}`}
					>
						<div className="font-tertiary text-[11px] tracking-[0.08em] text-muted">
							Home <span className="text-primary">/</span>{" "}
							<span className="text-ink-dim">Book Consultation</span>
						</div>
						<h1 className="mt-3.5 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
							Book a Consultation
						</h1>
						<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
							Tell us a bit about your requirement — an advisor from the right
							division will reach out to confirm your session.
						</p>
					</div>
				</Container>
			</div>

			{/* Form + info */}
			<section className="py-16 sm:py-20">
				<Container>
					<div
						ref={formRef}
						className={`grid gap-12 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out lg:grid-cols-2 lg:gap-16 ${
							formVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
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
									value={form.name}
									onChange={(e) => handleChange("name", e.target.value)}
									placeholder="Your name"
									required
									className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
								/>
							</div>

							<div className="mb-5">
								<label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
									Phone Number
								</label>
								<input
									type="tel"
									value={form.phone}
									onChange={(e) => handleChange("phone", e.target.value)}
									placeholder="+880"
									required
									className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
								/>
							</div>

							<div className="mb-5">
								<label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
									Division
								</label>
								<ThemedSelect
									value={form.division}
									onChange={(value) => handleChange("division", value)}
									options={DIVISION_OPTIONS}
								/>
							</div>

							<div className="mb-5">
								<label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
									Service
								</label>
								<ThemedSelect
									value={form.service}
									onChange={(value) => handleChange("service", value)}
									options={serviceOptions}
									placeholder="Select a service"
								/>
							</div>

							<div className="mb-5">
								<label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
									Preferred Date
								</label>
								<input
									type="date"
									value={form.date}
									onChange={(e) => handleChange("date", e.target.value)}
									className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
									style={{ colorScheme: theme }}
								/>
							</div>

							<div className="mb-7">
								<label className="mb-2 block font-tertiary text-xs uppercase tracking-[0.06em] text-muted">
									Preferred Time
								</label>
								<input
									type="time"
									value={form.time}
									onChange={(e) => handleChange("time", e.target.value)}
									required
									className="w-full rounded-sm border border-hairline bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
									style={{ colorScheme: theme }}
								/>
								<p className="mt-2 text-[12px] text-muted">{TIME_NOTE}</p>
							</div>

							<button
								type="submit"
								className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary"
							>
								Confirm Booking
							</button>
							<p className="mt-3 text-[12.5px] text-muted">
								This opens WhatsApp with your booking details pre-filled — just
								hit send.
							</p>
						</form>

						{/* Right: info */}
						<div className="border-hairline pt-8 lg:border-l lg:pt-0 lg:pl-14">
							{infoRows.map(({ icon: Icon, title, desc }) => (
								<div
									key={title}
									className="flex items-start gap-4 border-b border-hairline py-6 first:pt-0"
								>
									<div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-primary/40">
										<Icon
											size={16}
											strokeWidth={1.8}
											className="text-primary"
										/>
									</div>
									<div>
										<b className="block font-primary text-[13.5px] text-ink">
											{title}
										</b>
										<span className="mt-1 block text-[13px] text-ink-dim">
											{desc}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Booking;
