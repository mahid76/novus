// Central data source for every division's Services + Packages pages.
// Add/remove a unit here and its Service + Package pages update everywhere
// (Navbar, Divisions grid, and routing still need their own entries).

export const WHATSAPP_NUMBER = "8801886811862";

// ---- units ---------------------------------------------------------------
//
// Each service defines its OWN `packages` array — fully custom per service.
// A service can have 2 packages, 3, or any number; each package's name,
// price and feature list can be edited independently. To add a package to
// a service, copy one of the `{ name, price, features }` objects inside
// that service's `packages` array and change the values. To remove one,
// delete that object. There is no shared tier/generator logic anymore —
// what you see here is exactly what renders.

export const servicesData = {
	"advisory-firm": {
		tag: "DIVISION 01",
		title: "Novus Advisory Firm",
		path: "/NovusAdvisoryFirm",
		crumbLabel: "Novus Advisory Firm",
		intro:
			"Professional advisory and financial documentation firm — valuation, tax, net worth, audit, notary and translation services.",
		packagesIntro: "Pick the service below to jump straight to its packages.",
		services: [
				{
					id: "asset-valuation",
					icon: "💰",
					title: "CA Asset Valuation",
					desc: "Land, building, apartment, vehicle and business asset valuation reports based on applicable principles.",
					packages: [
						{
							name: "CA Asset Valuation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "CA Asset Valuation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report with full documentation support", "Dedicated advisor + fastest turnaround"],
						},
					],
				},
				{
					id: "tax-return",
					icon: "🧾",
					title: "Income Tax Return & Certificate",
					desc: "Individual and business tax return preparation with review of income, assets, liabilities and investments.",
					packages: [
						{
							name: "Income Tax Return & Certificate — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Income Tax Return & Certificate — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Income Tax Return & Certificate — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "fund-explanation",
					icon: "📜",
					title: "Financial Affidavit",
					desc: "Sworn financial affidavits presenting income, assets and financial standing for visa, legal or official use.",
					packages: [
						{
							name: "Financial Affidavit — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Financial Affidavit — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Financial Affidavit — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "net-worth",
					icon: "📝",
					title: "SOP (Statement of Purpose)",
					desc: "Professionally drafted statements of purpose for visa, admission and immigration applications.",
					packages: [
						{
							name: "SOP (Statement of Purpose) — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "SOP (Statement of Purpose) — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "SOP (Statement of Purpose) — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "business-audit",
					icon: "🔍",
					title: "Business Audit Report",
					desc: "Professional audit and financial review support covering financial position and accounting records.",
					packages: [
						{
							name: "Business Audit Report — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Business Audit Report — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Business Audit Report — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "bank-deposit",
					icon: "✉️",
					title: "Cover Letter",
					desc: "Professionally drafted cover letters for visa, admission, employment and official applications.",
					packages: [
						{
							name: "Cover Letter — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Cover Letter — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Cover Letter — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "source-of-fund",
					icon: "💵",
					title: "Source of Fund",
					desc: "Clear source-of-fund explanations for income, savings, investment, property sale, gift or loan, with evidence.",
					packages: [
						{
							name: "Source of Fund — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Source of Fund — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Source of Fund — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "notary",
					icon: "⚖️",
					title: "Notary Public",
					desc: "Notarization of documents, declarations, affidavits and agreements for official and legal purposes.",
					packages: [
						{
							name: "Notary Public — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Notary Public — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Notary Public — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "translation-doc",
					icon: "🌐",
					title: "Translation",
					desc: "Bangla–English and English–Bangla translation for financial, business, legal and personal documents.",
					packages: [
						{
							name: "Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
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
		services: [
				{
					id: "incorporation",
					icon: "🏢",
					title: "Company Incorporation",
					desc: "End-to-end support for new company formation, including RJSC-related documentation and formalities.",
					packages: [
						{
							name: "Company Incorporation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Company Incorporation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Company Incorporation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "tax-return-t",
					icon: "💼",
					title: "Tax Return Filing",
					desc: "Tax return preparation and filing for individuals, companies and organizations.",
					packages: [
						{
							name: "Tax Return Filing — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Tax Return Filing — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Tax Return Filing — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "internal-audit",
					icon: "🔍",
					title: "Internal Audit",
					desc: "Evaluation of internal controls, accounting processes, risk management and operational procedures.",
					packages: [
						{
							name: "Internal Audit — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Internal Audit — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Internal Audit — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "payroll",
					icon: "👥",
					title: "Payroll Management",
					desc: "Payroll processing including salary calculation, deductions, records and statutory compliance.",
					packages: [
						{
							name: "Payroll Management — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Payroll Management — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Payroll Management — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "vat",
					icon: "🧾",
					title: "VAT Registration & Return",
					desc: "VAT registration, documentation, return preparation and filing, and other compliance matters.",
					packages: [
						{
							name: "VAT Registration & Return — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "VAT Registration & Return — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "VAT Registration & Return — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "financial-statements",
					icon: "📊",
					title: "Financial Statements",
					desc: "Professional financial statements to maintain proper records and support informed decisions.",
					packages: [
						{
							name: "Financial Statements — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Financial Statements — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Financial Statements — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "valuation-t",
					icon: "💰",
					title: "Business Valuation",
					desc: "Valuation of businesses, shares and assets for transfer, investment, restructuring or financing.",
					packages: [
						{
							name: "Business Valuation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Business Valuation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Business Valuation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "ngo-audit",
					icon: "🤝",
					title: "NGO Audit Support",
					desc: "Audit and financial reporting support for NGOs to meet regulatory and donor requirements.",
					packages: [
						{
							name: "NGO Audit Support — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "NGO Audit Support — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "NGO Audit Support — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
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
			"5 services — pick a service below to jump straight to it.",
		services: [
				{
					id: "student-visa",
					icon: "🎓",
					title: "Student Visa & Study Abroad",
					desc: "Visa consultation, application support, SOP guidance, interview prep and pre-departure guidance.",
					packages: [
						{
							name: "Student Visa & Study Abroad — Package 1",
							price: "৳5,000",
							features: ["Initial consultation", "Document checklist", "Email guidance"],
						},
						{
							name: "Student Visa & Study Abroad — Package 2",
							price: "৳10,000",
							features: ["Everything in Package 1", "Full application preparation", "Interview / process preparation"],
						},
						{
							name: "Student Visa & Study Abroad — Package 3",
							price: "৳18,000",
							features: ["Everything in Package 2", "End-to-end dedicated case handling", "Priority support until completion"],
						},
					],
				},
				{
					id: "university-selection",
					icon: "🏫",
					title: "University Selection & Admission",
					desc: "Matching universities and programs to your academic profile, goals, budget and destination.",
					packages: [
						{
							name: "University Selection & Admission — Package 1",
							price: "৳5,000",
							features: ["Initial consultation", "Document checklist", "Email guidance"],
						},
						{
							name: "University Selection & Admission — Package 2",
							price: "৳10,000",
							features: ["Everything in Package 1", "Full application preparation", "Interview / process preparation"],
						},
						{
							name: "University Selection & Admission — Package 3",
							price: "৳18,000",
							features: ["Everything in Package 2", "End-to-end dedicated case handling", "Priority support until completion"],
						},
					],
				},
				{
					id: "vfs-documentation",
					icon: "📑",
					title: "VFS & Documentation Support",
					desc: "Organized support for visa documentation, forms, appointment prep and VFS submission.",
					packages: [
						{
							name: "VFS & Documentation Support — Package 1",
							price: "৳5,000",
							features: ["Initial consultation", "Document checklist", "Email guidance"],
						},
						{
							name: "VFS & Documentation Support — Package 2",
							price: "৳10,000",
							features: ["Everything in Package 1", "Full application preparation", "Interview / process preparation"],
						},
						{
							name: "VFS & Documentation Support — Package 3",
							price: "৳18,000",
							features: ["Everything in Package 2", "End-to-end dedicated case handling", "Priority support until completion"],
						},
					],
				},
				{
					id: "air-ticketing",
					icon: "✈️",
					title: "Air Ticketing & Travel Support",
					desc: "International air ticket booking and travel planning suited to your visa status and schedule.",
					packages: [
						{
							name: "Air Ticketing & Travel Support — Package 1",
							price: "৳5,000",
							features: ["Initial consultation", "Document checklist", "Email guidance"],
						},
						{
							name: "Air Ticketing & Travel Support — Package 2",
							price: "৳10,000",
							features: ["Everything in Package 1", "Full application preparation", "Interview / process preparation"],
						},
						{
							name: "Air Ticketing & Travel Support — Package 3",
							price: "৳18,000",
							features: ["Everything in Package 2", "End-to-end dedicated case handling", "Priority support until completion"],
						},
					],
				},
				{
					id: "tourist-visa",
					icon: "🌍",
					title: "Tourist Visa Services",
					desc: "Consultation and documentation support for tourist and visitor visa applications.",
					packages: [
						{
							name: "Tourist Visa Services — Package 1",
							price: "৳5,000",
							features: ["Initial consultation", "Document checklist", "Email guidance"],
						},
						{
							name: "Tourist Visa Services — Package 2",
							price: "৳10,000",
							features: ["Everything in Package 1", "Full application preparation", "Interview / process preparation"],
						},
						{
							name: "Tourist Visa Services — Package 3",
							price: "৳18,000",
							features: ["Everything in Package 2", "End-to-end dedicated case handling", "Priority support until completion"],
						},
					],
				},
		],
	},

	// Added after the original 3-division design — kept in the same style
	// as Advisory Firm / Tax.
	"translation-centre": {
		tag: "DIVISION 04",
		title: "Novus Translation Centre",
		path: "/NovusTranslationCentre",
		crumbLabel: "Novus Translation Centre",
		intro:
			"Certified, legal, academic and business translation — Bangla–English and English–Bangla — plus notarization, attestation and interpretation support.",
		packagesIntro: "Pick the service below to jump straight to its packages.",
		services: [
				{
					id: "certified-translation",
					icon: "📄",
					title: "Certified Document Translation",
					desc: "Bangla–English and English–Bangla translation of certificates, IDs and personal documents with signed certification.",
					packages: [
						{
							name: "Certified Document Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Certified Document Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Certified Document Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "legal-translation",
					icon: "⚖️",
					title: "Legal & Contract Translation",
					desc: "Precise translation of contracts, agreements, court documents and legal correspondence.",
					packages: [
						{
							name: "Legal & Contract Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Legal & Contract Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Legal & Contract Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "academic-translation",
					icon: "🎓",
					title: "Academic Document Translation",
					desc: "Transcripts, certificates and mark sheets translated for university admission or credential evaluation.",
					packages: [
						{
							name: "Academic Document Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Academic Document Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Academic Document Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "business-translation",
					icon: "🏢",
					title: "Business & Corporate Translation",
					desc: "Company profiles, trade licenses, financial statements and other corporate documents.",
					packages: [
						{
							name: "Business & Corporate Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Business & Corporate Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Business & Corporate Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "notarized-translation",
					icon: "✅",
					title: "Notarized & Attested Translation",
					desc: "Translation paired with notarization and attestation support for embassy or official submission.",
					packages: [
						{
							name: "Notarized & Attested Translation — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Notarized & Attested Translation — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Notarized & Attested Translation — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
				{
					id: "interpretation",
					icon: "🗣️",
					title: "Interpretation Services",
					desc: "On-site and remote interpretation for meetings, interviews and official appointments.",
					packages: [
						{
							name: "Interpretation Services — Package 1",
							price: "৳2,000",
							features: ["Initial document review", "Standard format preparation", "Email support"],
						},
						{
							name: "Interpretation Services — Package 2",
							price: "৳4,000",
							features: ["Priority document review", "Detailed report preparation", "Email + phone support"],
						},
						{
							name: "Interpretation Services — Package 3",
							price: "৳7,000",
							features: ["Priority document review", "Full documentation support", "Dedicated advisor", "Fastest turnaround"],
						},
					],
				},
		],
	},
};

export function getUnit(unitKey) {
	return servicesData[unitKey];
}

// Reads the `packages` array straight off that service's own object —
// no generator, no tier logic. Edit the service's `packages` array in
// servicesData above to change what shows on its card(s).
export function getPackagesForService(unitKey, serviceId) {
	const unit = servicesData[unitKey];
	if (!unit) return [];
	const service = unit.services.find((s) => s.id === serviceId);
	if (!service) return [];
	return service.packages || [];
}
