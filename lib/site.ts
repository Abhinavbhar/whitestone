// Single source of truth for business details.
export const SITE = {
  name: "White Stone Immigration Pathways",
  tagline: "Turning Global Dreams into Reality!",
  email: "whitestonepathways@gmail.com",
  phone: "7082699505",
  whatsapp: "917082699505",
  address: "SCO 11, 2nd Floor, Huda Complex, Opp. D.R.D.A, Near PNB Bank, Huda Market, DC Colony, Jind, Haryana 126102, India",
  url: "http://localhost:3000", // TODO: replace with your real domain after deploying
  // >>> TALLY CONFIGURATION: paste your Tally form ID here (the part after tally.so/r/ or tally.so/embed/) <<<
  tallyFormId: "LDKDoz",
};
export const NAV = [["Home", "#home"], ["Our Services", "#services"], ["Destinations", "#destinations"], ["IELTS & PTE", "#coaching"], ["Contact", "#contact"]] as const;
export const SERVICES = [
  { title: "Study Visa", icon: "GraduationCap", text: "Get assistance with international university admissions, SOP guidance, documentation, and study visa applications." },
  { title: "Tourist Visa", icon: "Plane", text: "Planning an international holiday? Get guidance with tourist visa applications and documentation." },
  { title: "Visitor Visa", icon: "Users", text: "Planning to visit family or friends abroad? Get assistance understanding visitor visa application requirements." },
  { title: "IELTS Coaching", icon: "BookOpenCheck", text: "Prepare with structured training sessions, mock tests, and focused practice to improve your IELTS performance." },
  { title: "PTE Coaching", icon: "Laptop", text: "Improve your PTE preparation through dedicated practice sessions and score improvement guidance." },
] as const;
export const DESTINATIONS = [
  { name: "Canada", flag: "🇨🇦", bg: "from-[#243F9B] to-[#4776D0]" },
  { name: "Australia", flag: "🇦🇺", bg: "from-[#1e3a8a] to-[#3b82c4]" },
  { name: "United Kingdom", flag: "🇬🇧", bg: "from-[#172554] to-[#3b5bb5]" },
  { name: "United States", flag: "🇺🇸", bg: "from-[#243F9B] to-[#6b8fdc]" },
  { name: "New Zealand", flag: "🇳🇿", bg: "from-[#1e40af] to-[#4776D0]" },
  { name: "Europe", flag: "🇪🇺", bg: "from-[#172554] to-[#4776D0]" },
] as const;
export const BENEFITS = [
  { title: "Personalized Guidance", icon: "Compass", text: "Get guidance based on your individual travel or study goals." },
  { title: "Application Assistance", icon: "FileCheck", text: "Understand application procedures and documentation requirements." },
  { title: "SOP Guidance", icon: "PenLine", text: "Receive assistance with preparing your Statement of Purpose." },
  { title: "IELTS & PTE Preparation", icon: "BookOpenCheck", text: "Prepare for English proficiency tests with dedicated practice and mock sessions." },
  { title: "End-to-End Support", icon: "Route", text: "Get assistance throughout the different stages of your application." },
] as const;
