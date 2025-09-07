import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Benefits from '@/components/Benefits';
import Integrations from '@/components/Integrations';
import Features from '@/components/Features';
import ReleaseTimeline from '@/components/ReleaseTimeline';
import Subsidy from '@/components/Subsidy';
import Pricing from '@/components/Pricing';
import Estimate from '@/components/Estimate';
import Flow from '@/components/Flow';
import SetupCoop from '@/components/SetupCoop';
import Company from '@/components/Company';
import Terms from '@/components/Terms';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Integrations />
        <Features />
        <ReleaseTimeline />
        <Subsidy />
        <Pricing />
        <Estimate />
        <Flow />
        <SetupCoop />
        <Company />
        <Terms />
        <CTAContact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}