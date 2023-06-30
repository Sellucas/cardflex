import AboutCard from "@/components/homeComponents/AboutCard";
import AccountIntegration from "@/components/homeComponents/AccountIntegration";
import CardSolutions from "@/components/homeComponents/CardSolutions";
import CashbackRewards from "@/components/homeComponents/CashbackRewards";
import Faq from "@/components/homeComponents/Faq";
import HeroSection from "@/components/homeComponents/HeroSection";
import PaymentEverywhere from "@/components/homeComponents/PaymentEverywhere";
import Pricing from "@/components/homeComponents/Pricing";
import Testimonials from "@/components/homeComponents/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutCard />
      <CardSolutions />
      <PaymentEverywhere />
      <CashbackRewards />
      <AccountIntegration />
      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  );
}
