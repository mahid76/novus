// Central data source for every division's Services + Packages pages.
// Add/remove a unit here and its Service + Package pages update everywhere
// (Navbar, Divisions grid, and routing still need their own entries).

export const WHATSAPP_NUMBER = "8801961727320";

// ---- package tier generators -------------------------------------------

// Two-tier: used by units where the work is document/report based
// (Advisory Firm, Tax, Translation Centre).
function twoTierPackages(base) {
	return [
		{
			tier: "Standard",
			name: `${base} — Standard`,
			price: "Contact for quote",
			features: [
				"Initial document review",
				"Standard report/format preparation",
				"Email support",
			],
			featured: false,
		},
		{
			tier: "Premium",
			name: `${base} — Premium`,
			price: "Contact for quote",
			features: [
				"Priority document review",
				"Detailed report with full documentation support",
				"Dedicated advisor + phone support",
				"Faster turnaround",
			],
			featured: true,
		},
	];
}

// Three-tier: used by Overseas, where the journey has more stages
// (consultation → application → end-to-end handling).
function threeTierPackages(base) {
	return [
		{
			tier: "Basic",
			name: `${base} — Basic`,
			price: "Contact for quote",
			features: [
				"Initial consultation",
				"Document checklist",
				"Email guidance",
			],
			featured: false,
		},
		{
			tier: "Standard",
			name: `${base} — Standard`,
			price: "Contact for quote",
			features: [
				"Everything in Basic",
				"Full application preparation",
				"Interview / process preparation",
			],
			featured: true,
		},
		{
			tier: "Premium",
			name: `${base} — Premium`,
			price: "Contact for quote",
			features: [
				"Everything in Standard",
				"End-to-end dedicated case handling",
				"Priority support until completion",
			],
			featured: false,
		},
	];
}

const TIER_FNS = {
	two: twoTierPackages,
	three: threeTierPackages,
};

// ---- units ---------------------------------------------------------------

export const servicesData = {
	"advisory-firm": {
		tag: "DIVISION 01",
		title: "Novus Advisory Firm",
		path: "/NovusAdvisoryFirm",
		crumbLabel: "Novus Advisory Firm",
		intro:
			"Professional advisory and financial documentation firm — valuation, tax, net worth, audit, notary and translation services.",
		packagesIntro: "Pick the service below to jump straight to its packages.",
		tier: "two",
		services: [
			{
				id: "asset-valuation",
				icon: "💰",
				title: "CA Asset Valuation Report",
				desc: "Land, building, apartment, vehicle and business asset valuation reports based on applicable principles.",
			},
			{
				id: "tax-return",
				icon: "🧾",
				title: "Income Tax Return Filing",
				desc: "Individual and business tax return preparation with review of income, assets, liabilities and investments.",
			},
			{
				id: "fund-explanation",
				icon: "📊",
				title: "Fund Explanation Report",
				desc: "Structured reports presenting the source, movement and utilization of funds for official purposes.",
			},
			{
				id: "net-worth",
				icon: "💼",
				title: "Net Worth Certificate",
				desc: "Certificates/statements presenting assets, liabilities and resulting net worth of an individual or entity.",
			},
			{
				id: "business-audit",
				icon: "🔍",
				title: "Business Audit Report",
				desc: "Professional audit and financial review support covering financial position and accounting records.",
			},
			{
				id: "bank-deposit",
				icon: "🏦",
				title: "Bank Deposit Explanation Letter",
				desc: "Professional explanations for bank deposits, significant credits, savings and transfers.",
			},
			{
				id: "source-of-fund",
				icon: "💵",
				title: "Source of Fund Explanation",
				desc: "Clear source-of-fund explanations for income, savings, investment, property sale, gift or loan, with evidence.",
			},
			{
				id: "notary",
				icon: "⚖️",
				title: "Notary Public Services",
				desc: "Notarization of documents, declarations, affidavits and agreements for official and legal purposes.",
			},
			{
				id: "translation-doc",
				icon: "🌐",
				title: "Translation Services",
				desc: "Bangla–English and English–Bangla translation for financial, business, legal and personal documents.",
			},
		],
	},

	tax: {
		tag: "DIVISION 02",
		title: "Novus- Tax VAT RJSC & Audit",
		path: "/NovusTax",
		crumbLabel: "Novus- Tax VAT RJSC & Audit",
		intro:
			"Tax, VAT, RJSC, accounting, audit, payroll and business valuation — integrated compliance for businesses and organizations.",
		packagesIntro: "Pick the service below to jump straight to its packages.",
		tier: "two",
		services: [
			{
				id: "incorporation",
				icon: "🏢",
				title: "Company Incorporation",
				desc: "End-to-end support for new company formation, including RJSC-related documentation and formalities.",
			},
			{
				id: "tax-return-t",
				icon: "💼",
				title: "Tax Return Filing",
				desc: "Tax return preparation and filing for individuals, companies and organizations.",
			},
			{
				id: "internal-audit",
				icon: "🔍",
				title: "Internal Audit",
				desc: "Evaluation of internal controls, accounting processes, risk management and operational procedures.",
			},
			{
				id: "payroll",
				icon: "👥",
				title: "Payroll Management",
				desc: "Payroll processing including salary calculation, deductions, records and statutory compliance.",
			},
			{
				id: "vat",
				icon: "🧾",
				title: "VAT Registration & Return",
				desc: "VAT registration, documentation, return preparation and filing, and other compliance matters.",
			},
			{
				id: "financial-statements",
				icon: "📊",
				title: "Financial Statements",
				desc: "Professional financial statements to maintain proper records and support informed decisions.",
			},
			{
				id: "valuation-t",
				icon: "💰",
				title: "Business Valuation",
				desc: "Valuation of businesses, shares and assets for transfer, investment, restructuring or financing.",
			},
			{
				id: "ngo-audit",
				icon: "🤝",
				title: "NGO Audit Support",
				desc: "Audit and financial reporting support for NGOs to meet regulatory and donor requirements.",
			},
		],
	},

	overseas: {
		tag: "DIVISION 03",
		title: "Novus Overseas",
		path: "/NovusOverseas",
		crumbLabel: "Novus Overseas",
		intro:
			"Student visa & study abroad guidance, university selection, VFS & documentation support, air ticketing and tourist visa services. Select a service to view its packages.",
		packagesIntro:
			"5 services, 15 packages — pick a service below to jump straight to it.",
		tier: "three",
		services: [
			{
				id: "student-visa",
				icon: "🎓",
				title: "Student Visa & Study Abroad",
				desc: "Visa consultation, application support, SOP guidance, interview prep and pre-departure guidance.",
			},
			{
				id: "university-selection",
				icon: "🏫",
				title: "University Selection & Admission",
				desc: "Matching universities and programs to your academic profile, goals, budget and destination.",
			},
			{
				id: "vfs-documentation",
				icon: "📑",
				title: "VFS & Documentation Support",
				desc: "Organized support for visa documentation, forms, appointment prep and VFS submission.",
			},
			{
				id: "air-ticketing",
				icon: "✈️",
				title: "Air Ticketing & Travel Support",
				desc: "International air ticket booking and travel planning suited to your visa status and schedule.",
			},
			{
				id: "tourist-visa",
				icon: "🌍",
				title: "Tourist Visa Services",
				desc: "Consultation and documentation support for tourist and visitor visa applications.",
			},
		],
	},

	// Added after the original 3-division design — kept in the same style
	// and tier structure as Advisory Firm / Tax (two-tier, document-based).
	"translation-centre": {
		tag: "DIVISION 04",
		title: "Novus Translation Centre",
		path: "/NovusTranslationCentre",
		crumbLabel: "Novus Translation Centre",
		intro:
			"Certified, legal, academic and business translation — Bangla–English and English–Bangla — plus notarization, attestation and interpretation support.",
		packagesIntro: "Pick the service below to jump straight to its packages.",
		tier: "two",
		services: [
			{
				id: "certified-translation",
				icon: "📄",
				title: "Certified Document Translation",
				desc: "Bangla–English and English–Bangla translation of certificates, IDs and personal documents with signed certification.",
			},
			{
				id: "legal-translation",
				icon: "⚖️",
				title: "Legal & Contract Translation",
				desc: "Precise translation of contracts, agreements, court documents and legal correspondence.",
			},
			{
				id: "academic-translation",
				icon: "🎓",
				title: "Academic Document Translation",
				desc: "Transcripts, certificates and mark sheets translated for university admission or credential evaluation.",
			},
			{
				id: "business-translation",
				icon: "🏢",
				title: "Business & Corporate Translation",
				desc: "Company profiles, trade licenses, financial statements and other corporate documents.",
			},
			{
				id: "notarized-translation",
				icon: "✅",
				title: "Notarized & Attested Translation",
				desc: "Translation paired with notarization and attestation support for embassy or official submission.",
			},
			{
				id: "interpretation",
				icon: "🗣️",
				title: "Interpretation Services",
				desc: "On-site and remote interpretation for meetings, interviews and official appointments.",
			},
		],
	},
};

export function getUnit(unitKey) {
	return servicesData[unitKey];
}

export function getPackagesForService(unitKey, serviceTitle) {
	const unit = servicesData[unitKey];
	if (!unit) return [];
	const tierFn = TIER_FNS[unit.tier] || twoTierPackages;
	return tierFn(serviceTitle);
}
