import { NavItem, PartCategory, Testimonial, FAQItem, PartItem } from './types';

export const BUSINESS_INFO = {
  name: "SAMs Auto Wrecking",
  operator: "Ernest Solutions LLC",
  email: "contact@samsautowrecking.com",
  address: "606 MATILDA ST BRENHAM, TX 77833",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const POLICY_LINKS: NavItem[] = [
  { label: "Shipping & Delivery Policy", href: "/policies/shipping" },
  { label: "Warranty Policy", href: "/policies/warranty" },
  { label: "Refund and Returns Policy", href: "/policies/returns" },
  { label: "Terms & Conditions", href: "/policies/terms" },
  { label: "Privacy Policy", href: "/policies/privacy" },
];

export const CATEGORIES: PartCategory[] = [
  { id: "engines", name: "Engines", image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=800" },
  { id: "transmissions", name: "Transmissions", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" },
  { id: "body-parts", name: "Body Parts", image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800" },
  { id: "headlights", name: "Headlights", image: "https://images.unsplash.com/photo-1590566107427-f4488e895ec3?auto=format&fit=crop&q=80&w=800" },
  { id: "wheels", name: "Wheels & Rims", image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=800" },
  { id: "suspension", name: "Suspension", image: "https://images.unsplash.com/photo-1625047509168-a7026f36ae04?auto=format&fit=crop&q=80&w=800" },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "Mike R.", location: "Ohio", text: "Found a perfect condition Lexus engine. Shipping was fast and the part works great. Highly recommend!", rating: 5 },
  { id: "2", name: "Sarah L.", location: "Texas", text: "Best prices on Audi OEM parts. Their customer service helped me verify the fitment before I ordered.", rating: 5 },
  { id: "3", name: "David K.", location: "Florida", text: "Ordered a Lincoln transmission. It arrived well-packaged and was exactly as described.", rating: 4 },
];

export const FAQS: FAQItem[] = [
  { question: "Do you ship nationwide?", answer: "Yes, we ship to all 50 states in the USA. We use major freight carriers for large items like engines and transmissions, and standard couriers for smaller parts." },
  { question: "How do I know the part will fit?", answer: "We use professional Hollander Interchange data to verify fitment. Our team is also available to help you confirm based on your VIN." },
  { question: "What is your standard warranty?", answer: "Most parts come with a standard 30-day replacement warranty. Extended warranties are available for certain components." },
  { question: "Do you test your parts?", answer: "Absolutely. All engines, transmissions, and electrical components are tested before being placed in our inventory." },
];

export const PARTS: PartItem[] = [
  {
    id: "eng-001",
    categoryId: "engines",
    name: "Lexus 5.0L V8 Engine Block",
    year: "2018",
    make: "Lexus",
    model: "RC F",
    price: "$6,500",
    condition: "Tested - 38k Miles",
    image: "https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80&w=800",
    description: "Complete long block assembly from a low-mileage donor. Compression tested across all cylinders. Includes oil pan and timing covers."
  },
  {
    id: "eng-002",
    categoryId: "engines",
    name: "Audi 2.0L TFSI Turbo Engine",
    year: "2020",
    make: "Audi",
    model: "A4",
    price: "$3,800",
    condition: "Clean Tier-1 Stock",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    description: "OEM Audi replacement engine. Includes turbocharger and intake manifold. Inspected for leaks and verified functional."
  },
  {
    id: "trans-001",
    categoryId: "transmissions",
    name: "Lincoln Navigator Transmission",
    year: "2019",
    make: "Lincoln",
    model: "Navigator",
    price: "$2,400",
    condition: "A-Grade Tested",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    description: "Durable automatic transmission unit. Shift tested with zero slip. Fluid drained for shipment."
  },
  {
    id: "trans-002",
    categoryId: "transmissions",
    name: "Mitsubishi Outlander CVT Gearbox",
    year: "2021",
    make: "Mitsubishi",
    model: "Outlander Sport",
    price: "$1,650",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
    description: "Low mileage CVT unit from a front-end collision donor. Internal mechanical components verified like new."
  },
  {
    id: "body-001",
    categoryId: "body-parts",
    name: "Audi Q5 Passenger Side Front Door",
    year: "2017",
    make: "Audi",
    model: "Q5",
    price: "$450",
    condition: "Minor Scratches",
    image: "https://images.unsplash.com/photo-1562607445-6677469b6f4e?auto=format&fit=crop&q=80&w=800",
    description: "Used OEM door shell. Includes window glass and window motor. Minimal prep needed for paint."
  },
  {
    id: "light-001",
    categoryId: "headlights",
    name: "Lexus RX Left LED Headlight Assembly",
    year: "2020",
    make: "Lexus",
    model: "RX350",
    price: "$890",
    condition: "Functional - All Tabs Intact",
    image: "https://images.unsplash.com/photo-1590566107427-f4488e895ec3?auto=format&fit=crop&q=80&w=800",
    description: "OEM Lexus LED headlight. Crystal clear lens. Plug and play installation."
  },
  {
    id: "wheel-001",
    categoryId: "wheels",
    name: "Mitsubishi Eclipse Cross Alloy Rim",
    year: "2019",
    make: "Mitsubishi",
    model: "Eclipse Cross",
    price: "$150",
    condition: "Used - Straight",
    image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=800",
    description: "Single 18-inch alloy wheel. Spun for balance, confirmed 100% straight. Minor cosmetic curb rash exists."
  },
  {
    id: "susp-001",
    categoryId: "suspension",
    name: "Lincoln Continental Air Strut",
    year: "2015",
    make: "Lincoln",
    model: "Continental",
    price: "$320",
    condition: "Leak Tested",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36ae04?auto=format&fit=crop&q=80&w=800",
    description: "Used air suspension front strut. Bag is in excellent condition with no visible dry rot or leaks."
  }
];
