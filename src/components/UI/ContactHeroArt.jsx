// components/UI/ContactHeroArt.jsx
const ContactHeroArt = () => (
	<svg viewBox="0 0 680 520" className="w-full max-w-md">
		<style>{`
			@keyframes cha-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
			@keyframes cha-pulse1 { 0%, 100% { opacity: .12; } 50% { opacity: .28; } }
			@keyframes cha-pulse2 { 0%, 100% { opacity: .1; } 50% { opacity: .22; } }
			@keyframes cha-draw { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
			@keyframes cha-dotfade { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }
			.cha-ring1 { animation: cha-pulse2 4s ease-in-out infinite; }
			.cha-ring2 { animation: cha-pulse1 4s ease-in-out infinite .5s; }
			.cha-needle { animation: cha-spin 14s linear infinite; transform-origin: 340px 290px; }
			.cha-env { stroke-dasharray: 1000; animation: cha-draw 2.2s ease-out forwards; }
			.cha-d1 { animation: cha-dotfade 2.5s ease-in-out infinite; }
			.cha-d2 { animation: cha-dotfade 2.5s ease-in-out infinite .4s; }
			.cha-d3 { animation: cha-dotfade 2.5s ease-in-out infinite .8s; }
		`}</style>

		<circle cx="340" cy="270" r="210" stroke="#D4AF37" strokeWidth="0.5" fill="none" className="cha-ring1" />
		<circle cx="340" cy="270" r="150" stroke="#D4AF37" strokeWidth="0.5" fill="none" className="cha-ring2" />

		<g transform="translate(140,160)">
			<rect x="0" y="0" width="400" height="260" rx="6" stroke="#D4AF37" strokeWidth="1.2" fill="none" className="cha-env" />
			<path d="M0 0 L200 150 L400 0" stroke="#D4AF37" strokeWidth="1.2" fill="none" className="cha-env" />
			<path d="M0 260 L150 130" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="0.5" fill="none" />
			<path d="M400 260 L250 130" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="0.5" fill="none" />
		</g>

		<g transform="translate(340,290)">
			<circle r="26" stroke="#D4AF37" strokeWidth="1" fill="none" />
			<path d="M0 -26 L0 -18 M0 26 L0 18 M-26 0 L-18 0 M26 0 L18 0" stroke="#D4AF37" strokeWidth="1" />
			<g className="cha-needle">
				<path d="M0 -14 L8 8 L0 2 L-8 8 Z" fill="#D4AF37" />
			</g>
		</g>

		<g strokeWidth="0.5" strokeOpacity="0.25">
			<line x1="60" y1="440" x2="620" y2="440" stroke="#D4AF37" />
			<circle cx="60" cy="440" r="2.5" fill="#D4AF37" stroke="none" className="cha-d1" />
			<circle cx="340" cy="440" r="2.5" fill="#D4AF37" stroke="none" className="cha-d2" />
			<circle cx="620" cy="440" r="2.5" fill="#D4AF37" stroke="none" className="cha-d3" />
		</g>
	</svg>
);

export default ContactHeroArt;