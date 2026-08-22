import { Award } from "lucide-react";
import { Link } from "react-router";
import advisoryLogo from "../assets/logos/novus-advisory-logo.jpeg";
import overseasLogo from "../assets/logos/novus-overseas-logo.jpeg";
import taxLogo from "../assets/logos/novus-tax-logo.jpeg";
import translationLogo from "../assets/logos/novus-translation-logo.svg";
// Replace with the real CEO photo path
import ceoPhoto from "../assets/ceo.jpg";
import Container from "../components/Layout/Container";
import { useReveal } from "../hooks/useReveal";

const pillars = [
	{
		tag: "MISSION",
		title: "Simplify what's complex",
		text: "We make complex financial, regulatory and international-documentation requirements simple, organized and transparent.",
	},
	{
		tag: "VISION",
		title: "A trusted name in Bangladesh",
		text: "To be recognised for professional integrity, technical expertise, and consistent client satisfaction across all four divisions.",
	},
	{
		tag: "COMMITMENT",
		title: "Accuracy with care",
		text: "Every report, return, or application is prepared with professionalism, confidentiality and attention to detail.",
	},
];

const divisions = [
	{
		logo: advisoryLogo,
		eyebrow: "Division 01",
		name: "Novus Advisory Firm",
		blurb:
			"Professional advisory and financial documentation — CA asset valuation, tax return filing, fund & income explanation, net worth certification, business audit, notary and translation.",
		focus:
			"Documentation-first: every report is built on supporting evidence and applicable valuation principles.",
		serves:
			"Individuals, entrepreneurs, professionals, investors, and organizations needing official documentation.",
		link: "/services",
	},
	{
		logo: taxLogo,
		eyebrow: "Division 02",
		name: "Novus- Tax VAT RJSC & Audit",
		blurb:
			"Integrated Tax, VAT, RJSC, Accounting, Audit, Payroll and Business Valuation services for businesses, entrepreneurs, companies and NGOs.",
		focus:
			"Integrated compliance: tax, VAT, RJSC and audit handled through one professional platform.",
		serves:
			"Companies, entrepreneurs, NGOs and other organizations across Bangladesh.",
		link: "/services",
	},
	{
		logo: overseasLogo,
		eyebrow: "Division 03",
		name: "Novus Overseas",
		blurb:
			"Overseas education, visa consultancy and travel support — from university selection to visa documentation, VFS submission and air ticketing.",
		focus:
			"Personalised, transparent guidance from application to departure and travel.",
		serves:
			"Students, visa applicants, and travelers planning international journeys.",
		link: "/services",
	},
	{
		logo: translationLogo,
		eyebrow: "Division 04",
		name: "Novus Translation Centre",
		blurb:
			"Certified, legal, academic and business translation — Bangla–English and English–Bangla — plus notarization, attestation and interpretation support.",
		focus:
			"Accuracy and confidentiality on every document, certified for official use.",
		serves:
			"Individuals, students and businesses needing certified or notarized translation.",
		link: "/services",
	},
];

/* Reusable eyebrow label (mono, tracked, gold rule) */
const Eyebrow = ({ children }) => (
	<div className="flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
		<span className="h-px w-[22px] bg-primary/60" />
		{children}
	</div>
);

/* Single division block — its own component so useReveal (a hook)
   can be called once per instance instead of inside a .map() loop */
const DivisionBlock = ({ division }) => {
	const [ref, visible] = useReveal();

	return (
		<div className="border-t border-hairline py-16 lg:py-20">
			<Container>
				<div
					ref={ref}
					className={`grid grid-cols-1 items-center gap-10 transition-all duration-700 ease-out lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
						}`}
				>
					{/* Left: identity */}
					<div>
						<div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-primary/40">
							<img
								src={division.logo}
								alt=""
								className="h-full w-full object-cover"
							/>
						</div>
						<Eyebrow>{division.eyebrow}</Eyebrow>
						<h2 className="mt-3 font-secondary text-2xl font-semibold text-ink sm:text-3xl">
							{division.name}
						</h2>
						<p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-dim">
							{division.blurb}
						</p>
						<Link
							to={division.link}
							className="mt-6 inline-block rounded-sm border border-primary/40 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-primary hover:bg-surface"
						>
							View Services
						</Link>
					</div>

					{/* Right: focus / serves */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="rounded-sm border border-hairline p-5">
							<div className="mb-2.5 flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
								<span className="h-px w-[22px] bg-primary/60" />
								Focus
							</div>
							<p className="text-[13.5px] leading-relaxed text-ink-dim">
								{division.focus}
							</p>
						</div>
						<div className="rounded-sm border border-hairline p-5">
							<div className="mb-2.5 flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
								<span className="h-px w-[22px] bg-primary/60" />
								Serves
							</div>
							<p className="text-[13.5px] leading-relaxed text-ink-dim">
								{division.serves}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

/* CEO block for the page-head right column — built from this page's own
   pattern: an Eyebrow label + border-hairline box (same as the pillars
   and Focus/Serves cards). Photo sits beside the text at a medium size,
   revealed with a left-to-right wipe, plus a gentle hover zoom. */
const CeoCard = () => {
	const [ref, visible] = useReveal();

	return (
		<div
			ref={ref}
			className={`group flex items-stretch overflow-hidden rounded-sm border border-hairline transition-all duration-700 ease-out ${visible ? "translate-y-3 opacity-100" : "translate-y-4 opacity-0"
				}`}
		>
			<div className="relative w-2/5 shrink-0 overflow-hidden bg-surface">
				<img
					src={ceoPhoto}
					alt="Founder & CEO, Novus Group"
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
					style={{
						clipPath: visible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
						transition: "clip-path 900ms cubic-bezier(0.16,1,0.3,1)",
					}}
				/>
			</div>

			<div className="flex-1 p-5 sm:p-6">
				<Eyebrow>Leadership</Eyebrow>

				<div className="mt-4">
					<div className="font-secondary text-lg font-semibold text-ink">
						Md. Shariful Islam Shovo
					</div>
					<div className="font-tertiary text-[11px] uppercase tracking-[0.18em] text-primary">
						Founder &amp; CEO
					</div>
				</div>

				<p className="mt-4 text-[13px] leading-relaxed text-ink-dim">
					“Precise advice, proper documentation — that&apos;s the standard we
					hold ourselves to, every time.”
				</p>
			</div>
		</div>
	);
};


const About = () => {
	const [headRef, headVisible] = useReveal();
	const [pillarsRef, pillarsVisible] = useReveal();
	const [closingRef, closingVisible] = useReveal();

	return (
		<div className="bg-bg">

			{/* ============ PAGE HEAD ============ */}
			<div
				className="relative overflow-hidden border-b border-hairline py-16 lg:py-24"
				style={{
					backgroundImage:
						"radial-gradient(ellipse 800px 400px at 90% 0%, rgba(212,175,55,.08), transparent 60%)",
				}}
			>
				<Container>
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
						{/* Left: heading + intro */}
						<div
							ref={headRef}
							className={`transition-all duration-700 ease-out ${headVisible
									? "translate-y-0 opacity-100"
									: "translate-y-5 opacity-0"
								}`}
						>
							<div className="font-tertiary text-[11px] uppercase tracking-[0.08em] text-muted">
								<Link to="/" className="transition-colors hover:text-primary">
									Home
								</Link>
								<span className="mx-2 text-primary">/</span>
								<span>About</span>
							</div>

							<h1 className="mt-4 font-secondary text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.1] text-ink">
								About Novus Group
							</h1>

							<p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-dim sm:text-base">
								Novus Group is a Bangladesh-based professional group operating
								through four specialised divisions — Novus Advisory Firm, Novus
								Tax, Novus Overseas, and Novus Translation Centre — each focused
								on a distinct area of financial, regulatory, overseas-consultancy
								and translation expertise, unified by one standard of
								professionalism.
							</p>
						</div>

						{/* Right: CEO card, fills the previously empty space */}
						<CeoCard />
					</div>
				</Container>
			</div>

			{/* ============ MISSION / VISION / COMMITMENT ============ */}
			<section className="py-16 lg:py-20">
				<Container>
					<div
						ref={pillarsRef}
						className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3"
					>
						{pillars.map((p, i) => (
							<div
								key={p.tag}
								className={`bg-bg p-8 transition-all duration-700 ease-out sm:p-9 ${pillarsVisible
										? "translate-y-0 opacity-100"
										: "translate-y-4 opacity-0"
									}`}
								style={{
									transitionDelay: pillarsVisible ? `${i * 90}ms` : "0ms",
								}}
							>
								<div className="font-tertiary text-xs tracking-[0.1em] text-primary">
									{p.tag}
								</div>
								<h4 className="mt-3 font-secondary text-lg font-semibold text-ink">
									{p.title}
								</h4>
								<p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-dim">
									{p.text}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* ============ DIVISIONS ============ */}
			{divisions.map((d) => (
				<DivisionBlock key={d.name} division={d} />
			))}

			{/* ============ CLOSING STRIP ============ */}
			<section className="border-t border-hairline py-16 lg:py-20">
				<Container>
					<div
						ref={closingRef}
						className={`flex flex-col items-start justify-between gap-6 rounded-sm border border-primary/25 bg-surface p-10 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:flex-row sm:items-center ${closingVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-5"
							}`}
					>
						<div>
							<div className="flex items-center gap-2.5 font-tertiary text-[11px] uppercase tracking-[0.22em] text-primary">
								<Award size={14} strokeWidth={2} />
								One name, four units
							</div>
							<h3 className="mt-3 font-secondary text-xl font-semibold text-ink sm:text-2xl">
								Speak with the right division for your need.
							</h3>
						</div>
						<Link to="/booking" className="shrink-0">
							<button className="rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-primary">
								Book a Consultation
							</button>
						</Link>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default About;