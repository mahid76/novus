import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import Container from "../Layout/Container";

const reviews = [
	{
		quote:
			"Novus Advisory Firm handled our net worth certification with real precision — every figure backed and every report properly formatted for the bank.",
		name: "Farhana Islam",
		role: "Business Owner, Dhaka",
	},
	{
		quote:
			"Company incorporation and RJSC compliance that used to take weeks was sorted in days. Novus- Tax VAT RJSC & Audit kept us informed at every step.",
		name: "Rakibul Hasan",
		role: "Founder, Chattogram",
	},
	{
		quote:
			"From university selection to visa documentation, Novus Overseas made a stressful process feel completely manageable.",
		name: "Sadia Rahman",
		role: "Student, Sylhet",
	},
];

const Reviews = () => {
	const [index, setIndex] = useState(0);
	const timerRef = useRef(null);
	const [headRef, headIn] = useReveal();
	const [bodyRef, bodyIn] = useReveal();

	const goTo = (i) => {
		setIndex((i + reviews.length) % reviews.length);
	};

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setIndex((prev) => (prev + 1) % reviews.length);
		}, 6000);
		return () => clearInterval(timerRef.current);
	}, [index]);

	return (
		<section className="py-20 sm:py-28 border-t border-hairline">
			<Container>
				<div
					ref={headRef}
					className={`max-w-md mx-auto text-center mb-14 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
						headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
					}`}
				>
					<div className="font-tertiary text-[11px] tracking-[0.22em] uppercase text-primary flex items-center justify-center gap-2.5 before:content-[''] before:w-[22px] before:h-px before:bg-primary/40 after:content-[''] after:w-[22px] after:h-px after:bg-primary/40">
						Client Feedback
					</div>
					<h2 className="font-secondary font-semibold text-ink text-[clamp(28px,4vw,44px)] leading-[1.12] mt-3">
						What clients say
					</h2>
				</div>

				<div
					ref={bodyRef}
					className={`max-w-2xl mx-auto text-center motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
						bodyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
					}`}
				>
					<div className="text-primary tracking-widest text-[15px] mb-4">
						★★★★★
					</div>
					<div key={index} className="min-h-[96px] animate-fade-up">
						<p className="font-secondary italic text-ink text-[20px] sm:text-[24px] leading-snug">
							&ldquo;{reviews[index].quote}&rdquo;
						</p>
						<div className="text-ink-dim text-[14px] mt-6">
							<b className="text-ink">{reviews[index].name}</b> —{" "}
							{reviews[index].role}
						</div>
					</div>

					<div className="flex items-center justify-center gap-6 mt-8">
						<button
							aria-label="Previous review"
							onClick={() => goTo(index - 1)}
							className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-dim hover:border-primary hover:text-primary transition-colors"
						>
							<svg
								viewBox="0 0 24 24"
								className="w-4 h-4 fill-none stroke-current"
							>
								<path
									d="M15 18l-6-6 6-6"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<div className="flex items-center gap-2">
							{reviews.map((_, i) => (
								<span
									key={i}
									onClick={() => goTo(i)}
									role="button"
									tabIndex={0}
									aria-label={`Go to review ${i + 1}`}
									className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
										i === index ? "bg-primary" : "bg-hairline"
									}`}
								/>
							))}
						</div>

						<button
							aria-label="Next review"
							onClick={() => goTo(index + 1)}
							className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-dim hover:border-primary hover:text-primary transition-colors"
						>
							<svg
								viewBox="0 0 24 24"
								className="w-4 h-4 fill-none stroke-current"
							>
								<path
									d="M9 6l6 6-6 6"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Reviews;
