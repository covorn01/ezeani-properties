import { LEADERSHIP_MEMBERS } from './leadershipData';

export const EZEANI_COMPANY_INFO = {
  name: "Ezeani Properties Ltd",
  group: "A subsidiary of Ezeani Group",
  tagline: "Luxury Through Positioning",
  motto: "Creating Legacies, Building Trust, Securing Properties",
  identity: "Real Estate is not what I do, it is who I am.",
  brandPromise: "We are committed to helping you position your investment where tomorrow’s wealth is being created and to help you make property decisions with greater clarity and confidence.",
  headline: "Luxury Through Positioning: Where Tomorrow’s Wealth Is Being Created.",
  subheadline: "Specializing in verified luxury lands, generational wealth, and strategic commercial properties across Delta State, Anambra State, and nationwide.",
  vision: "To become one of Africa’s most trusted Real Estate brands, recognized for transforming the property/land acquisition experience through transparency, positioning and commitment to helping young generations, couples and investors secure properties that creates lasting wealth.",
  mission: "To simplify and improve property acquisition process by providing reliable property information, professional guidance and transparent services that help younger generations, couples and investors make informed Real Estate decisions. We are committed to helping our clients avoid risks through proper verification, professional diligence and responsible services.",
  founderStorySnippet: {
    title: "Ezeani na-eme ife ani",
    meaning: "The King of the Land who deals in Lands",
    quote: "Real Estate is not what I do, it is who I am.",
    philosophy: "Nothing is truly bad if you have the mindset to learn from it. Every setback, challenge, and disappointment was not an obstacle; it was alignment with purpose, alignment with calling, alignment with who I am."
  },
  phone: "0902 171 0933",
  whatsapp: "+2349021710933",
  email: "info@ezeaniproperties.com",
  social: {
    instagram: "@ezeaniproperties",
    facebook: "Ezeani Properties Ltd"
  },
  offices: [
    { city: "Headquarters (Delta State)", address: "Ezeani Group, ECI Plaza, Okpanam Road, Asaba, Delta State, Nigeria" },
    { city: "Anambra Regional Desk", address: "Awka Commercial Corridor, Awka, Anambra State, Nigeria" }
  ],
  coreValues: [
    { 
      title: "Integrity", 
      desc: "We do what is right, even when it is not the easiest option." 
    },
    { 
      title: "Transparency", 
      desc: "Our clients deserve clarity before they make commitments." 
    },
    { 
      title: "Positioning", 
      desc: "Our clients deserve to be where tomorrow’s wealth is being created." 
    },
    { 
      title: "Accountability", 
      desc: "We take responsibility for our actions, commitments, and professional conduct." 
    },
    { 
      title: "Relationship", 
      desc: "We build people that help build the city." 
    }
  ],
  clientSegments: [
    {
      title: "Young Generations",
      tagline: "First-Time Property Buyers",
      desc: "Helping ambitious young professionals acquire genuine land the right way, avoiding costly traps and laying early foundations for lasting generational wealth."
    },
    {
      title: "Couples & Families",
      tagline: "Zero Dispute Security",
      desc: "Protecting couples from fraudulent middle-men, overlapping claims, and bitter conflicts with 100% verified documentation and clear boundary beacons."
    },
    {
      title: "Diaspora Clients",
      tagline: "Safe Remote Investment",
      desc: "Eliminating the fear of lost savings. Direct video inspections, verified registry searches, and transparent execution so you invest home with confidence."
    },
    {
      title: "Strategic Investors",
      tagline: "Positioning Where Wealth Grows",
      desc: "Identifying high-growth corridors in Delta State, Anambra State, and national economic centers before value explodes, maximizing long-term appreciation."
    }
  ],
  processSteps: [
    { num: "01", title: "Consult & Clarify", desc: "We listen to your goals, family vision, and preferred region to define your ideal acquisition." },
    { num: "02", title: "Strategic Positioning", desc: "We shortlist properties in high-growth corridors with genuine titles and zero encumbrances." },
    { num: "03", title: "Rigorous Verification", desc: "Our legal and title team conducts deep registry searches and boundary audits before commitment." },
    { num: "04", title: "Secured Handover", desc: "You receive your verified deeds, beacons, and documentation with complete peace of mind." }
  ],
  leadership: LEADERSHIP_MEMBERS
};

export { LEADERSHIP_MEMBERS };

export const CORPORATE_BANK_ACCOUNTS = [
  {
    bankName: "Zenith Bank PLC",
    accountName: "Ezeani Properties Limited",
    accountNumber: "1018942201",
    currency: "NGN (Naira)",
    type: "Corporate Operations & Inspection Fees",
    iconColor: "#8DC63F"
  },
  {
    bankName: "Access Bank PLC",
    accountName: "Ezeani Properties Limited",
    accountNumber: "0782991043",
    currency: "NGN (Naira)",
    type: "Property Allocations & Escrow Retainer",
    iconColor: "#B462E8"
  },
  {
    bankName: "Guaranty Trust Bank (GTBank)",
    accountName: "Ezeani Properties Limited",
    accountNumber: "0219488102",
    currency: "USD / Domiciliary",
    type: "Diaspora Inflows & Foreign Currency Remittance",
    swiftCode: "GTBINGLA",
    iconColor: "#34073E"
  }
];

export const PAYMENT_SERVICES_LIST = [
  {
    id: "inspection",
    name: "Site Inspection & Field Escort",
    feeNgn: 25000,
    feeUsd: 30,
    desc: "Includes physical site escort, GPS beacon confirmation, surveyor accompaniment, or private live 4K video inspection for diaspora clients."
  },
  {
    id: "consultation",
    name: "Executive & Founder Advisory",
    feeNgn: 50000,
    feeUsd: 65,
    desc: "1-on-1 strategic portfolio allocation session with Christian Ezeani or senior positioning architect for high-yield acquisitions."
  },
  {
    id: "title-search",
    name: "Legal Cadastral & Registry Title Search",
    feeNgn: 75000,
    feeUsd: 95,
    desc: "Full legal verification with State Ministry of Lands, Surveyor-General cadastral registry audit, and caveat search."
  },
  {
    id: "property-mgmt",
    name: "Property Management Onboarding Retainer",
    feeNgn: 100000,
    feeUsd: 125,
    desc: "Initial estate physical audit, tenant vetting onboarding, maintenance team assignment, and official facility onboarding."
  },
  {
    id: "reservation",
    name: "Property Holding & Allocation Deposit",
    feeNgn: 500000,
    feeUsd: 650,
    desc: "Initial refundable commitment to freeze property price, reserve plot boundaries, and initiate contract drafting."
  }
];

export const MOCK_PROPERTIES = [
  {
    id: "ez-prop-1",
    title: "The Royal Monarch Mansion",
    category: "Residential",
    status: "For Sale",
    price: 450000000,
    priceFormatted: "₦450,000,000",
    location: "Ikoyi, Lagos",
    address: "Alexander Avenue, Ikoyi, Lagos",
    beds: 5,
    baths: 6,
    sqft: 7500,
    acres: 0.4,
    image: "/images/hero-villa.jpg",
    gallery: [
      "/images/hero-villa.jpg",
      "/images/mansion.jpg"
      /* COMMENTED OUT:
      "/images/hero-construction.jpg",
      "/images/hero-surveyor.jpg"
      */
    ],
    description: "A luxury mansion in the heart of Ikoyi. Features cantilevered floor-to-ceiling glass, private infinity pool, fully automated smart home system, Italian marble finishing, and 24/7 security. Certificate of Occupancy (C of O) fully verified.",
    surveyStatus: "Verified Governor's Consent & C of O",
    surveyDetails: "Full cadastral boundary survey completed in 2026 by Ezeani Geospatial Team. Zero encumbrances.",
    constructionStatus: "Verified & Handover Ready",
    builder: "Ezeani Luxury Estates",
    lat: 6.4531,
    lng: 3.4344,
    featured: true,
    features: [
      "Verified Certificate of Occupancy (C of O)",
      "Private Swimming Pool & Sun Deck",
      "Integrated Smart Automation & Solar Backup",
      "5 Luxury En-suite Bedrooms + Maid's Quarters",
      "Sub-Zero Fitted Gourmet Kitchen",
      "24/7 Gated Perimeter Security"
    ]
  },
  {
    id: "ez-prop-2",
    title: "Ezeani Commercial & Retail Tower",
    category: "Commercial",
    status: "For Sale",
    price: 1200000000,
    priceFormatted: "₦1,200,000,000",
    location: "Victoria Island, Lagos",
    address: "Ahmadu Bello Way, Victoria Island, Lagos",
    beds: 0,
    baths: 16,
    sqft: 32000,
    acres: 1.2,
    image: "/images/hero-commercial.jpg",
    gallery: [
      "/images/hero-commercial.jpg",
      "/images/hero-villa.jpg"
    ],
    description: "State-of-the-art multi-story commercial complex designed for corporate headquarters, financial institutions, and tech hubs. High visibility along Ahmadu Bello Way with double-skin thermal glass facade and high-speed elevators.",
    surveyStatus: "Federal C of O & Structural Audit",
    surveyDetails: "Full GIS mapping and geotechnical foundation load certification conducted.",
    constructionStatus: "Completed & Verified",
    builder: "Ezeani Commercial Developments",
    lat: 6.4281,
    lng: 3.4219,
    featured: true,
    features: [
      "High Visibility Prime Commercial Location",
      "32,000 sqft Column-Free Open Plan Floors",
      "Dedicated Multi-Level Parking Garage",
      "Dual 500kVA Generator & Solar Grid Integration",
      "LEED Sustainable Building Standards"
    ]
  },
  {
    id: "ez-prop-delta",
    title: "Asaba Grand Crest Luxury Plots",
    category: "Luxury Lands",
    status: "For Sale",
    price: 45000000,
    priceFormatted: "₦45,000,000",
    location: "Okpanam Road, Asaba, Delta State",
    address: "Okpanam Road Corridor, Asaba, Delta State",
    beds: 0,
    baths: 0,
    sqft: 0,
    acres: 0.25,
    image: "/images/hero-villa.jpg",
    gallery: [
      "/images/hero-villa.jpg",
      "/images/mansion.jpg"
    ],
    description: "Strategically positioned luxury residential plots along the booming Okpanam Road corridor in Asaba, Delta State. 100% genuine title, beaconed corner pins, direct access to tarred dual-carriageway, and verified high capital growth. Tailored for young generations, couples, and diaspora investors seeking guaranteed zero-risk land ownership.",
    surveyStatus: "Delta State Ministry Approved C of O",
    surveyDetails: "Full cadastral beacon survey lodged with Delta State Ministry of Lands & Surveys. Zero encumbrances.",
    constructionStatus: "Beaconed & Instant Allocation Ready",
    builder: "Ezeani Land Advisory Team",
    lat: 6.2059,
    lng: 6.6959,
    featured: true,
    features: [
      "100% Verified C of O Title Deed",
      "Cleared, Beaconed & Numbered Pins",
      "Direct Access to Okpanam Dual Road",
      "Instant Physical Allocation & Survey Plan",
      "5 Mins to Asaba International Airport"
    ]
  },
  {
    id: "ez-prop-anambra",
    title: "Awka Millennium Heritage Estate",
    category: "Luxury Lands",
    status: "For Sale",
    price: 65000000,
    priceFormatted: "₦65,000,000",
    location: "Millennium City, Awka, Anambra State",
    address: "Enugu-Onitsha Expressway Corridor, Awka, Anambra State",
    beds: 0,
    baths: 0,
    sqft: 0,
    acres: 0.35,
    image: "/images/mansion.jpg",
    gallery: [
      "/images/mansion.jpg",
      "/images/hero-commercial.jpg"
    ],
    description: "Prestigious residential and commercial plots in Anambra State's most ambitious master-planned luxury city. Designed with underground electricity, modern asphalt drainage, automated security gates, and guaranteed capital appreciation.",
    surveyStatus: "Registered Governor's Consent",
    surveyDetails: "Full cadastral coordinates logged with Anambra State Geographic Information System (ANSGIS).",
    constructionStatus: "Master-Planned & Handover Ready",
    builder: "Ezeani Luxury Estates",
    lat: 6.2209,
    lng: 7.0734,
    featured: true,
    features: [
      "Registered Governor's Consent Title",
      "Master-Planned Underground Utilities",
      "Tarred Boulevard & Concrete Drainage",
      "Zero Boundary Dispute Guarantee",
      "High Appreciation Wealth Corridor"
    ]
  },
  {
    id: "ez-prop-3",
    title: "Guzape Luxury Crest Plot",
    category: "Luxury Lands",
    status: "For Sale",
    price: 180000000,
    priceFormatted: "₦180,000,000",
    location: "Guzape, Abuja",
    address: "Diplomatic Zone, Guzape Hills, Abuja",
    beds: 0,
    baths: 0,
    sqft: 0,
    acres: 2.1,
    image: "/images/hero-villa.jpg",
    gallery: [
      "/images/hero-villa.jpg",
      "/images/mansion.jpg"
    ],
    description: "Prime elevated 2.1-acre residential plot offering breathtaking vistas over Abuja central area. Cleared, fully beaconed with FCDA Certificate of Occupancy, and ready for immediate luxury development.",
    surveyStatus: "FCDA Registered Title & Cadastral Beacons",
    surveyDetails: "Topographical contour mapping & soil stability test complete. Beacon numbers registered with AGIS.",
    constructionStatus: "Title & Survey Verified",
    builder: "Ezeani Land Advisory Team",
    lat: 9.0345,
    lng: 7.5122,
    featured: true,
    features: [
      "Direct FCDA C of O Title Deed",
      "2.1 Acres Panoramic Hilltop Elevation",
      "Tarred Access Road & Underground Utilities",
      "Soil Test & Geotechnical Certificate Included",
      "Cleared & Beaconed Corner Pins"
    ]
  },
  {
    id: "ez-prop-4",
    title: "Epe Industrial & Logistics Hub",
    category: "Industrial",
    status: "For Sale",
    price: 320000000,
    priceFormatted: "₦320,000,000",
    location: "Epe Industrial Corridor, Lagos",
    address: "Lekki-Epe Expressway, Epe, Lagos",
    beds: 0,
    baths: 4,
    sqft: 45000,
    acres: 8.5,
    /* image: "/images/hero-construction.jpg", */
    image: "/images/hero-commercial.jpg",
    gallery: [
      "/images/hero-commercial.jpg",
      "/images/mansion.jpg"
      /* COMMENTED OUT:
      "/images/hero-construction.jpg",
      "/images/hero-surveyor.jpg"
      */
    ],

    description: "Strategic 8.5-acre industrial logistics site positioned along the expanding Epe-Ibeju corridor, close to the Dangote Refinery and Lekki Deep Sea Port. Ideal for factory warehouses, logistics centers, or manufacturing assembly plants.",
    surveyStatus: "Gazette & Perimeter Survey Approved",
    surveyDetails: "Perimeter survey registered with Lagos State Surveyor-General office.",
    constructionStatus: "Site Drainage & Fence Complete",
    builder: "Ezeani Industrial Infrastructure",
    lat: 6.5841,
    lng: 3.9833,
    featured: false,
    features: [
      "8.5 Acres Heavy Industrial Land",
      "Proximity to Deep Sea Port & Refinery",
      "Heavy Machinery Access Road Clearance",
      "Approved Drainage & Environmental Permit"
    ]
  },
  {
    id: "ez-prop-5",
    title: "Haven Court Luxury Terraces",
    category: "Residential",
    status: "For Rent",
    price: 18000000,
    priceFormatted: "₦18,000,000 / yr",
    location: "Lekki Phase 1, Lagos",
    address: "Freedom Way, Lekki Phase 1, Lagos",
    beds: 4,
    baths: 4.5,
    sqft: 3800,
    acres: 0.2,
    image: "/images/mansion.jpg",
    gallery: [
      "/images/mansion.jpg",
      "/images/hero-villa.jpg"
      /* COMMENTED OUT: "/images/survey.jpg" */
    ],
    description: "Sleek contemporary 4-bedroom terrace home with fully fitted kitchen, swimming pool access, BQ, and 24-hour estate power supply. Located in a secure gated enclave in Lekki Phase 1.",
    surveyStatus: "Verified Ownership Title",
    surveyDetails: "Registered Deed of Assignment & C of O.",
    constructionStatus: "Newly Completed 2026",
    builder: "Ezeani Homes",
    lat: 6.4474,
    lng: 3.4723,
    featured: false,
    features: [
      "24/7 Guaranteed Power & Security",
      "Communal Swimming Pool & Gym",
      "Fitted Kitchen with Microwave & Heat Extractor",
      "All Rooms En-suite + Boy's Quarter"
    ]
  },
  {
    id: "ez-prop-ebonyi",
    title: "Centenary City Prime Plots",
    category: "Luxury Lands",
    status: "For Sale",
    price: 32000000,
    priceFormatted: "₦32,000,000",
    location: "Centenary City, Abakaliki, Ebonyi State",
    address: "Centenary Boulevard, Abakaliki, Ebonyi State",
    beds: 0,
    baths: 0,
    sqft: 0,
    acres: 0.3,
    image: "/images/hero-villa.jpg",
    gallery: ["/images/hero-villa.jpg", "/images/mansion.jpg"],
    description: "Prime residential and commercial development plots within the fast-growing Centenary City corridor, Abakaliki, Ebonyi State. 100% verified state title with perimeter survey and beaconed corners.",
    surveyStatus: "Ministry Approved Cadastral Survey & C of O",
    surveyDetails: "Full boundary beacons verified and lodged with Ebonyi State Ministry of Lands.",
    constructionStatus: "Beaconed & Ready for Immediate Allocation",
    builder: "Ezeani Land Advisory Team",
    lat: 6.3249,
    lng: 8.1137,
    featured: true,
    features: [
      "100% Verified C of O Documentation",
      "Direct Boulevard Access & Clean Topography",
      "Perimeter Beacons & Allocation Plan Ready",
      "High Appreciation Capital Corridor"
    ]
  },
  {
    id: "ez-prop-enugu",
    title: "Independence Layout Sovereign Sanctuary",
    category: "Residential",
    status: "For Sale",
    price: 240000000,
    priceFormatted: "₦240,000,000",
    location: "Independence Layout, Enugu State",
    address: "Independence Avenue, Enugu, Enugu State",
    beds: 5,
    baths: 6,
    sqft: 6800,
    acres: 0.35,
    image: "/images/mansion.jpg",
    gallery: ["/images/mansion.jpg", "/images/hero-villa.jpg"],
    description: "Contemporary 5-bedroom luxury residence in prime Independence Layout, Enugu State. Contemporary finishes, security perimeter, private swimming pool, and verified Governor's Consent.",
    surveyStatus: "Enugu State Land Registry C of O",
    surveyDetails: "Full cadastral verification completed. Zero caveats or encumbrances.",
    constructionStatus: "Completed & Ready for Handover",
    builder: "Ezeani Luxury Estates",
    lat: 6.4474,
    lng: 7.5139,
    featured: true,
    features: [
      "Verified Governor's Consent Title",
      "Private Swimming Pool & Green Lawn",
      "Smart Home Automation System",
      "Prestige Diplomatic Neighborhood"
    ]
  },
  {
    id: "ez-prop-imo",
    title: "New Owerri Boulevard Executive Plots",
    category: "Luxury Lands",
    status: "For Sale",
    price: 48000000,
    priceFormatted: "₦48,000,000",
    location: "New Owerri, Imo State",
    address: "Concorde Boulevard Corridor, New Owerri, Imo State",
    beds: 0,
    baths: 0,
    sqft: 0,
    acres: 0.28,
    image: "/images/hero-commercial.jpg",
    gallery: ["/images/hero-commercial.jpg", "/images/mansion.jpg"],
    description: "Strategic residential plots along the New Owerri luxury corridor, Imo State. Immediate physical allocation, C of O verification, and zero boundary disputes.",
    surveyStatus: "Imo Geographic Information Agency (GIA) Verified",
    surveyDetails: "Beacon coordinates verified and confirmed title clearance.",
    constructionStatus: "Beaconed & Survey Document Handover Ready",
    builder: "Ezeani Land Advisory Team",
    lat: 5.4832,
    lng: 7.0358,
    featured: true,
    features: [
      "Clean Title & Beaconed Boundaries",
      "Close to Concorde Hotel & Port Harcourt Axis",
      "Electricity & Water Infrastructure Nearby",
      "Safe Generational Land Investment"
    ]
  },
  {
    id: "ez-prop-abia",
    title: "Aba Commercial Logistics Hub & Plots",
    category: "Commercial",
    status: "For Sale",
    price: 85000000,
    priceFormatted: "₦85,000,000",
    location: "Aba Commercial Hub, Abia State",
    address: "Port Harcourt Expressway Axis, Aba, Abia State",
    beds: 0,
    baths: 4,
    sqft: 18000,
    acres: 1.5,
    image: "/images/hero-villa.jpg",
    gallery: ["/images/hero-villa.jpg", "/images/hero-commercial.jpg"],
    description: "High-yield commercial plots and logistics development lands positioned along the Aba industrial corridor, Abia State. Complete title verification and dual-carriageway frontage.",
    surveyStatus: "Registered Commercial Title & Survey",
    surveyDetails: "Full cadastral perimeter survey verified by Abia State Ministry of Lands.",
    constructionStatus: "Perimeter Fenced & Ready",
    builder: "Ezeani Commercial Developments",
    lat: 5.1065,
    lng: 7.3667,
    featured: false,
    features: [
      "Prime Commercial Highway Frontage",
      "1.5 Acres Ideal for Warehousing or Trade",
      "Registered Title with Zero Disputes",
      "High Volume Commercial Trade Corridor"
    ]
  },
  {
    id: "ez-prop-rent-abuja",
    title: "Maitama Diplomatic Furnished Villa",
    category: "Residential",
    status: "For Rent",
    price: 35000000,
    priceFormatted: "₦35,000,000 / yr",
    location: "Maitama District, Abuja",
    address: "Gana Street Corridor, Maitama, Abuja",
    beds: 5,
    baths: 6,
    sqft: 5400,
    acres: 0.35,
    image: "/images/hero-villa.jpg",
    gallery: ["/images/hero-villa.jpg", "/images/mansion.jpg"],
    description: "Exquisite 5-bedroom luxury diplomatic residence in Maitama. Fully serviced with round-the-clock security, backup power, Olympic lap pool, and ambassadorial privacy.",
    surveyStatus: "FCDA Verified Rental Lease Agreement",
    surveyDetails: "Registered executive residential lease with verified corporate title credentials.",
    constructionStatus: "Fully Serviced & Ready for Immediate Move-In",
    builder: "Ezeani Luxury Estates",
    lat: 9.0820,
    lng: 7.4913,
    featured: true,
    features: [
      "Ambassadorial High-Security Gated Perimeter",
      "Olympic Lap Pool & Landscaped Sun Deck",
      "Full Standby Power & Clean Water Filtration",
      "5 En-suite Bedrooms + Detached Staff Quarters"
    ]
  },
  {
    id: "ez-prop-rent-delta",
    title: "Asaba Executive Serviced Terrace",
    category: "Residential",
    status: "For Rent",
    price: 9500000,
    priceFormatted: "₦9,500,000 / yr",
    location: "GRA Core Axis, Asaba, Delta State",
    address: "Summit Road Corridor, GRA, Asaba, Delta State",
    beds: 4,
    baths: 4.5,
    sqft: 3400,
    acres: 0.2,
    image: "/images/mansion.jpg",
    gallery: ["/images/mansion.jpg", "/images/hero-villa.jpg"],
    description: "Premium serviced 4-bedroom terrace duplex in Asaba GRA. Dedicated transformer, gated security, children's play court, and direct access to Asaba Airport corridor.",
    surveyStatus: "Verified Title & Registered Lease Contract",
    surveyDetails: "Full title verification and corporate tenancy deed prepared by Ezeani Legal Desk.",
    constructionStatus: "Newly Commissioned & Move-In Ready",
    builder: "Ezeani Homes",
    lat: 6.2050,
    lng: 6.7120,
    featured: true,
    features: [
      "Dedicated Estate Transformer & Solar Backup",
      "24/7 Gated Uniformed Security",
      "Fitted Modern Kitchen & Water Heaters",
      "Prime GRA Residential Serenity"
    ]
  },
  {
    id: "ez-prop-rent-anambra",
    title: "Awka Millennium Commercial Plaza Suites",
    category: "Commercial",
    status: "For Rent",
    price: 15000000,
    priceFormatted: "₦15,000,000 / yr",
    location: "Millennium City, Awka, Anambra State",
    address: "Enugu-Onitsha Expressway Corridor, Awka, Anambra State",
    beds: 0,
    baths: 8,
    sqft: 12000,
    acres: 0.8,
    image: "/images/hero-commercial.jpg",
    gallery: ["/images/hero-commercial.jpg", "/images/hero-villa.jpg"],
    description: "Modern open-plan commercial floors for corporate regional banking, tech enterprises, and consulting hubs. Ample parking, elevator, and 24/7 power management.",
    surveyStatus: "ANSGIS Approved Commercial Facility",
    surveyDetails: "Registered corporate commercial lease with complete fire and safety certifications.",
    constructionStatus: "Operational & Fit-Out Ready",
    builder: "Ezeani Commercial Developments",
    lat: 6.2230,
    lng: 7.0750,
    featured: false,
    features: [
      "High Visibility Expressway Frontage",
      "12,000 sqft Flexible Commercial Open Floors",
      "Heavy Duty Elevator & Accessible Ramps",
      "Guaranteed Commercial Footfall & 50+ Car Parking"
    ]
  },
  {
    id: "ez-prop-rent-lagos-office",
    title: "Victoria Island Sovereign Water-View Suites",
    category: "Commercial",
    status: "For Rent",
    price: 28000000,
    priceFormatted: "₦28,000,000 / yr",
    location: "Victoria Island, Lagos",
    address: "Ozumba Mbadiwe Avenue, Victoria Island, Lagos",
    beds: 0,
    baths: 6,
    sqft: 8500,
    acres: 0.5,
    image: "/images/hero-commercial.jpg",
    gallery: ["/images/hero-commercial.jpg", "/images/mansion.jpg"],
    description: "Prime waterfront corporate offices in Victoria Island. Panoramic lagoon views, central air systems, high-speed fiber backbone, and executive boardroom access.",
    surveyStatus: "Federal C of O & Lagos Safety Certified",
    surveyDetails: "Registered corporate commercial premises with 24/7 facility management.",
    constructionStatus: "Completed & Furnished",
    builder: "Ezeani Commercial Developments",
    lat: 6.4320,
    lng: 7.4260,
    featured: false,
    features: [
      "Direct Lagoon Waterfront Panorama",
      "High-Speed Fiber & Redundant Generator Banks",
      "Underground Executive Parking Garage",
      "LEED Certified Energy Efficiency"
    ]
  }
];

export const COVERED_STATES = [
  {
    id: "lagos",
    name: "Lagos",
    fullName: "Lagos State",
    region: "Commercial Capital • South-West",
    headline: "Luxury Mansions & Prime Commercial Towers",
    locations: "Ikoyi, Victoria Island, Lekki Phase 1, Epe",
    listingsCount: 5,
    image: "/images/hero-villa.jpg",
    titleStatus: "Governor's Consent & Federal C of O",
    tagline: "High-Yield Luxury Estates"
  },
  {
    id: "abuja",
    name: "Abuja",
    fullName: "Abuja (FCT)",
    region: "Diplomatic Seat • North-Central",
    headline: "Hillside Diplomatic Enclaves & Prime Plots",
    locations: "Guzape Hills, Maitama, Diplomatic Zone",
    listingsCount: 2,
    image: "/images/mansion.jpg",
    titleStatus: "Direct FCDA C of O & AGIS Verified",
    tagline: "Ultra-Prime Sovereign Land"
  },
  {
    id: "delta",
    name: "Delta",
    fullName: "Delta State",
    region: "Corporate HQ • South-South",
    headline: "Asaba Corridors & Booming Commercial Plots",
    locations: "Okpanam Road (HQ Corridor), Asaba City, GRA",
    listingsCount: 2,
    image: "/images/hero-commercial.jpg",
    titleStatus: "Delta State Ministry Approved C of O",
    tagline: "Corporate HQ Corridor & Prime Plots"
  },
  {
    id: "anambra",
    name: "Anambra",
    fullName: "Anambra State",
    region: "Commercial Hub • South-East",
    headline: "Awka Millennium Estates & Onitsha Trade Hub",
    locations: "Millennium City, Awka, Expressway Corridors",
    listingsCount: 2,
    image: "/images/mansion.jpg",
    titleStatus: "ANSGIS Registered Governor's Consent",
    tagline: "Generational Wealth & Master Layouts"
  },
  {
    id: "ebonyi",
    name: "Ebonyi",
    fullName: "Ebonyi State",
    region: "Emerging Gateway • South-East",
    headline: "Centenary City Plots & Capital Corridors",
    locations: "Centenary City, Abakaliki Urban Corridor",
    listingsCount: 1,
    image: "/images/hero-villa.jpg",
    titleStatus: "100% Ministry Cadastral Survey",
    tagline: "High-Growth Emerging Frontiers"
  },
  {
    id: "enugu",
    name: "Enugu",
    fullName: "Enugu State",
    region: "Historic Capital • South-East",
    headline: "Independence Layout & Golf Sanctuary Homes",
    locations: "Independence Layout, Golf Enclave, New Haven",
    listingsCount: 1,
    image: "/images/mansion.jpg",
    titleStatus: "Verified Enugu Land Registry C of O",
    tagline: "Executive Sanctuaries & Elite Homes"
  },
  {
    id: "imo",
    name: "Imo",
    fullName: "Imo State",
    region: "Heartland Corridor • South-East",
    headline: "New Owerri Luxury Plots & Boulevard Estates",
    locations: "New Owerri, Concorde Avenue, Port Harcourt Road",
    listingsCount: 1,
    image: "/images/hero-commercial.jpg",
    titleStatus: "Clean Title & Beaconed Boundaries",
    tagline: "Prime Heartland Residential Layouts"
  },
  {
    id: "abia",
    name: "Abia",
    fullName: "Abia State",
    region: "Industrial Crossroads • South-East",
    headline: "Aba Commercial Hub & Logistics Lands",
    locations: "Aba Trade Axis, Umuahia Strategic Corridors",
    listingsCount: 1,
    image: "/images/hero-villa.jpg",
    titleStatus: "Commercial C of O & Approved Frontage",
    tagline: "High-Demand Trade & Industrial Land"
  }
];

export const SURVEY_SERVICES = [
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  {
    id: "boundary",
    title: "Boundary & Cadastral Survey",
    icon: "Compass",
    tagline: "Exact legal property lines & beacon verification",
    description: "Accurate physical land boundary determination using RTK GPS and total stations. Registered with state surveyor-general offices to protect your land against boundary disputes.",
    deliverables: ["Stamped Cadastral Survey Plan", "Landed Beacon Pins Placed", "Surveyor-General Lodgement", "Title Registration Deed Map"],
    estimatedDays: "3 - 5 Business Days"
  },
  {
    id: "topo",
    title: "Topographical & 3D Contour Mapping",
    icon: "Map",
    tagline: "Elevation modeling & terrain slope analysis",
    description: "High-resolution elevation mapping for architects, structural engineers, and estate developers. Essential for drainage planning, cut-and-fill earthworks, and foundation design.",
    deliverables: ["AutoCAD & REVIT (.DWG) Surface Files", "Contour Map (0.5m interval)", "Volumetric Earthwork Calculations", "Drone Aerial Orthomosaic Map"],
    estimatedDays: "4 - 6 Business Days"
  },
  {
    id: "title-search",
    title: "Land Title Verification & Registry Search",
    icon: "ShieldCheck",
    tagline: "Uncompromising due diligence & encumbrance search",
    description: "Thorough legal and geospatial verification of land ownership certificates, historical registry deeds, Governor's Consent, court caveats, government acquisition zones, and mortgage liens.",
    deliverables: ["Official Title Search Report", "Government Acquisition Status Clearance", "Ownership Chain Audit", "Legal Risk Advisory"],
    estimatedDays: "2 - 4 Business Days"
  },
  {
    id: "drone-gis",
    title: "Drone Aerial & GIS Mapping",
    icon: "Layers",
    tagline: "High-density point clouds & photogrammetry",
    description: "Rapid aerial mapping using RTK drones for large land tracts, commercial layouts, and agricultural developments across Nigeria.",
    deliverables: ["High-Res Orthomosaic TIFF Map", "LiDAR Point Cloud Data", "Digital Surface Model (DSM)", "Web GIS Interactive Map Link"],
    estimatedDays: "2 - 3 Business Days"
  }
  */
];

export const CONSTRUCTION_SERVICES = [
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  {
    id: "turnkey",
    title: "Turnkey Residential Construction",
    icon: "Home",
    description: "End-to-end luxury home construction from architectural conceptualization, structural engineering, permitting, foundation work to interior fit-out and key handover.",
    highlights: ["Fixed Price Contract", "BIM 3D Architectural Visuals", "Dedicated Site Engineer", "10-Year Structural Warranty"]
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Development",
    icon: "Building2",
    description: "Execution of corporate office towers, warehouses, factory sites, and mixed-use retail spaces with strict milestone compliance.",
    highlights: ["Steel & Reinforced Concrete", "Heavy Vehicle Access Engineering", "Commercial HVAC & Power Infrastructure", "Milestone Handover"]
  },
  {
    id: "renovation",
    title: "Architectural Remodeling & Modernization",
    icon: "Hammer",
    description: "Transformative structural renovations, facade modernizations, penthouse upgrades, and luxury interior finishing.",
    highlights: ["Structural Load Modification", "Bespoke Italian Kitchen & Wardrobes", "Smart Home Automation", "Energy Efficient Retrofits"]
  }
  */
];

export const CONSULTATION_TYPES = [
  {
    id: "virtual",
    title: "Virtual HD Video Consultation",
    desc: "45-min video call with our Lead Real Estate Consultant or Architect. Review property titles, blueprints, or land coordinates.",
    duration: "45 Mins",
    fee: "Free Session"
  },
  {
    id: "site",
    title: "On-Site Property Inspection Visit",
    desc: "In-person site inspection guided by our senior team to verify boundary beacons, neighborhood access, and foundation feasibility.",
    duration: "2 - 3 Hours",
    fee: "Free Inspection"
  },
  {
    id: "office",
    title: "In-Office Masterclass & Planning",
    desc: "Meet at our Lekki or Maitama design studio to review material samples, 3D architectural renders, and title deed documents.",
    duration: "60 Mins",
    fee: "Free Session"
  }
];

export const SAMPLE_BOOKINGS = [
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  {
    id: "EZ-2026-9014",
    clientName: "Dr. Anthony Eze",
    email: "a.eze@example.com",
    phone: "0902 171 0933",
    serviceCategory: "Land Surveying",
    consultationType: "On-Site Property Inspection Visit",
    date: "2026-10-12",
    time: "10:00 AM",
    location: "Guzape Crest Plot, Abuja",
    status: "Confirmed",
    assignedSpecialist: "Eng. Marcus Thorne (Lead Surveyor)",
    notes: "Requires boundary pin re-establishment and topographical contour map for hillside residential build."
  }
  */
  {
    id: "EZ-2026-9014",
    clientName: "Dr. Anthony Eze",
    email: "a.eze@example.com",
    phone: "0902 171 0933",
    serviceCategory: "Property Acquisition",
    consultationType: "On-Site Property Inspection Visit",
    date: "2026-10-12",
    time: "10:00 AM",
    location: "The Royal Monarch Mansion, Ikoyi",
    status: "Confirmed",
    assignedSpecialist: "Christian Ezeani (Founder & MD)",
    notes: "Private VIP inspection and closing deed perfection review."
  }
];

export const NEWS_ARTICLES = [
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  {
    id: "news-1",
    title: "Ezeani Group Expands Cadastral Title Verification Hub in Abuja & Lagos",
    date: "October 2026",
    category: "Company News",
    readTime: "4 min read",
    image: "/images/hero-surveyor.jpg",
    summary: "Ezeani Properties Ltd launches advanced RTK GPS GIS title mapping service across Lagos and Abuja to provide 100% verified, encumbrance-free property documentation for local and diaspora buyers."
  },
  */
  {
    id: "news-2",
    title: "2026 Real Estate Investment Outlook: Prime Corridors in Lekki, Epe & Guzape",
    date: "September 2026",
    category: "Market Insights",
    readTime: "6 min read",
    image: "/images/hero-villa.jpg",
    summary: "Our research team analyzes capital appreciation trends, infrastructure expansion, and high-yield residential development opportunities across Nigeria's fastest growing urban centers."
  },
  {
    id: "news-luxury",
    title: "The Rise of Waterfront Ultra-Luxury Mansions in Lagos & Island Penthouses",
    date: "October 2026",
    category: "Luxury Portfolio",
    readTime: "4 min read",
    image: "/images/mansion.jpg",
    summary: "High-net-worth investors and diaspora families are driving unprecedented demand for turn-key waterfront villas in Ikoyi and Epe waterfront enclaves."
  }
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  ,
  {
    id: "news-3",
    title: "Ezeani Master Builders Achieves Fixed-Cost Architectural Delivery Benchmark",
    date: "August 2026",
    category: "Construction & Build",
    readTime: "5 min read",
    image: "/images/hero-construction.jpg",
    summary: "How Ezeani Construction eliminates cost overrun risks through BIM 3D architectural modeling, fixed-price turnkey contracts, and rigorous 10-year structural warranty standards."
  }
  */
];

export const CAREERS_LIST = [
  /* COMMENTED OUT FOR REAL ESTATE & LUXURY FOCUS:
  {
    id: "car-1",
    title: "Senior Cadastral Land Surveyor (RTK & GIS)",
    department: "Surveying & Title Verification",
    location: "Abuja / Lagos, Nigeria",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Lead boundary surveying field teams, execute RTK GPS mapping, process GIS shapefiles, and interface with FCDA & Lagos State Surveyor-General offices."
  },
  {
    id: "car-2",
    title: "Principal Architectural Design Lead",
    department: "Turnkey Architecture & Build",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    experience: "7+ Years",
    desc: "Drive master 3D BIM architectural designs, structural detailing, client project consultations, and site execution oversight."
  },
  */
  {
    id: "car-3",
    title: "Real Estate Investment Advisor",
    department: "Property Sales & Client Relations",
    location: "Lagos / Remote (Diaspora Desk)",
    type: "Full-Time",
    experience: "3+ Years",
    desc: "Guide high-net-worth individuals, institutions, and diaspora investors through property acquisitions, inspections, and title verification."
  },
  {
    id: "car-4",
    title: "Luxury Residential Portfolio Manager",
    department: "Prime Estates & Client Relations",
    location: "Ikoyi / Victoria Island, Lagos",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Oversee premier residential listings, conduct exclusive private viewings, and manage high-net-worth investor relationships."
  }
];

export const CURRENCY_CONFIG = [
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', shortLabel: 'NGN ₦', rate: 1, locale: 'en-NG' },
  { code: 'USD', symbol: '$', name: 'US Dollar', shortLabel: 'USD $', rate: 1500, locale: 'en-US' },
  { code: 'GBP', symbol: '£', name: 'British Pound', shortLabel: 'GBP £', rate: 1950, locale: 'en-GB' },
  { code: 'EUR', symbol: '€', name: 'Euro', shortLabel: 'EUR €', rate: 1650, locale: 'de-DE' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan (RMB)', shortLabel: 'CNY ¥', rate: 210, locale: 'zh-CN' },
];

export function formatCurrencyPrice(amount, currency = 'NGN', isRental = false) {
  if (!amount || isNaN(amount)) return isRental ? '₦0 / yr' : '₦0';
  const conf = CURRENCY_CONFIG.find(c => c.code === currency) || CURRENCY_CONFIG[0];
  
  if (conf.code === 'NGN') {
    const formatted = `₦${Number(amount).toLocaleString()}`;
    return isRental ? `${formatted} / yr` : formatted;
  }
  
  const converted = Math.round(Number(amount) / conf.rate);
  const formatted = new Intl.NumberFormat(conf.locale, {
    style: 'currency',
    currency: conf.code,
    maximumFractionDigits: 0
  }).format(converted);
  return isRental ? `${formatted} / yr` : formatted;
}

export const SAMPLE_MANAGEMENT_RECORDS = [
  {
    id: 'mgt-001',
    refCode: 'MGT-2026-001',
    ownerName: 'Dr. Chidi Okafor',
    ownerPhone: '+234 803 456 7890',
    ownerEmail: 'c.okafor@diaspora-uk.com',
    ownerLocation: 'London, United Kingdom (Diaspora)',
    propertyTitle: 'The Ivory Terraces (4-Unit Luxury Residence)',
    propertyType: 'Block of Luxury Flats',
    stateLocation: 'Lagos State',
    address: 'Admiralty Way, Lekki Phase 1, Lagos',
    unitsCount: '4 Units',
    mandateType: 'Full In-Person Facility & Tenancy Management',
    status: 'Active Mandate',
    assignedManager: 'Engr. Christian Ezeani (Lead Steward)',
    inspectionFrequency: 'Bi-Weekly On-Site',
    monthlyRentYield: '₦18,000,000 / annum',
    remittanceStatus: 'Remitted via Corporate Escrow (Current)',
    dateRegistered: '2026-10-12',
    notes: 'Diaspora owner living in London. Ezeani team handles 100% on-ground maintenance, vetted tenants, generator fuel scheduling, and direct quarterly rental remittance.',
    staffLogs: [
      { id: 'log-1', date: '2026-10-24', author: 'Engr. Christian Ezeani', text: 'Completed bi-weekly physical inspection. Generator serviced; borehole water treatment chemical replenished.' },
      { id: 'log-2', date: '2026-10-15', author: 'Lagos Ops Desk', text: 'Q3 rent disbursement of ₦4.5M sent to owner foreign-domiciliary account. Confirmation receipt delivered via WhatsApp.' }
    ]
  },
  {
    id: 'mgt-002',
    refCode: 'MGT-2026-002',
    ownerName: 'Barr. Ifeoma Nnamdi',
    ownerPhone: '+234 812 345 6789',
    ownerEmail: 'ifeoma.nnamdi@chambers.ng',
    ownerLocation: 'Abuja (FCT)',
    propertyTitle: 'Crown Crest Plaza & Commercial Suites',
    propertyType: 'Commercial Plaza/Complex',
    stateLocation: 'Anambra State',
    address: 'Zik Avenue, Awka, Anambra State',
    unitsCount: '12 Commercial Units',
    mandateType: 'Commercial Facility Care & Lease Oversight',
    status: 'Active Mandate',
    assignedManager: 'Anambra State Operations Desk',
    inspectionFrequency: 'Weekly Physical Audit',
    monthlyRentYield: '₦32,000,000 / annum',
    remittanceStatus: 'Remitted (Zero Default)',
    dateRegistered: '2026-09-28',
    notes: '12 commercial office/banking tenants. On-site facility team oversees security guards, waste disposal, cleaning contractor, and lease renewals.',
    staffLogs: [
      { id: 'log-3', date: '2026-10-22', author: 'Awka Operations Lead', text: 'Renewed 2 corporate tenancy agreements. Executed formal deed of lease.' }
    ]
  },
  {
    id: 'mgt-003',
    refCode: 'MGT-2026-003',
    ownerName: 'Chief Kenneth Aliyu',
    ownerPhone: '+234 809 876 5432',
    ownerEmail: 'kenneth.aliyu@gmail.com',
    ownerLocation: 'Port Harcourt, Rivers State',
    propertyTitle: 'Pine Wood Executive Duplex',
    propertyType: 'Residential Villa/Mansion',
    stateLocation: 'Delta State',
    address: 'GRA Phase 2, Asaba, Delta State',
    unitsCount: '1 Luxury Villa',
    mandateType: 'Vacant Asset Protection & Preventive Maintenance',
    status: 'Maintenance Active',
    assignedManager: 'Asaba Field Supervisor',
    inspectionFrequency: 'Weekly Perimeter Check',
    monthlyRentYield: 'N/A (Vacant Executive Asset)',
    remittanceStatus: 'N/A',
    dateRegistered: '2026-10-20',
    notes: 'Owner frequently travels. Managing perimeter security, landscaping, swimming pool water filtration, and electrical testing.',
    staffLogs: [
      { id: 'log-4', date: '2026-10-26', author: 'Asaba Supervisor', text: 'Pool chlorination and perimeter lighting repaired. Sent video confirmation to Chief Kenneth.' }
    ]
  },
  {
    id: 'mgt-004',
    refCode: 'MGT-2026-004',
    ownerName: 'Mrs. Folashade Adeyemi',
    ownerPhone: '+234 802 999 1122',
    ownerEmail: 'folashade.adeyemi@yahoo.com',
    ownerLocation: 'Houston, Texas, USA (Diaspora)',
    propertyTitle: 'Atlantic View 5-Bedroom Detached Duplex',
    propertyType: 'Residential Villa/Mansion',
    stateLocation: 'Lagos State',
    address: 'Chevy View Estate, Chevron Tollgate, Lekki, Lagos',
    unitsCount: '1 Unit',
    mandateType: 'Full Hands-Off Stewardship & Tenant Sourcing',
    status: 'Pending Evaluation',
    assignedManager: 'Lagos Onboarding Desk',
    inspectionFrequency: 'Pending Physical Walkthrough',
    monthlyRentYield: 'Projected ₦14,000,000 / annum',
    remittanceStatus: 'Awaiting Proposal Signature',
    dateRegistered: '2026-10-28',
    notes: 'Inquiry received via website. Owner is based in Houston and needs a trustworthy corporate manager to take over from an uncooperative former agent.',
    staffLogs: [
      { id: 'log-5', date: '2026-10-28', author: 'System Onboarding', text: 'Website inquiry received. Dispatched notification to Lead Admin.' }
    ]
  }
];

