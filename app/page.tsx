import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import WhyUs from "@/components/WhyUs";
import Coaching from "@/components/Coaching";
import EnquiryForm from "@/components/EnquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Review from "@/components/Review";
export default function Home() {
  return (<><Navbar /><main><Hero /><Services /><Destinations /><WhyUs /><Coaching /><Review/><EnquiryForm /><Contact /></main><Footer /><WhatsAppButton /></>);
}
