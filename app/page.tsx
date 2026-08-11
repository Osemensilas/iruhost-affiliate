import Link from "next/link";
import Image from "next/image";
import CommissionStructure from "@/components/general/Commission";
import WhoCanJoin from "@/components/general/Audience";
import AffiliateBenefits from "@/components/general/Benefit";
import AffiliateFAQ from "@/components/general/Faq";
import HowItWorks from "@/components/general/HowItWork";

export default function Home() {
  return (
    <>
    {/* Hero Section Begins */}
    <section className="h-screen w-full px-10">
      <div className="h-full w-full flex items-center gap-2">
        <div className="h-max w-3/5">
          <h1 className="text-accent font-bold text-xl mb-5">IruHost Affiliate Program</h1>
          <h2 className="text-accent font-bold text-5xl mb-5">Join Our Affilate Program and Earn from Every Referral</h2>
          <p className="text-base mb-10 text-accent">Turn your clients relationship into recurring income. Refer your clients to IruHost for their hosting, domain, professional email, ssl, and website needs and earn commission as they continue to use our services.</p>
          <div className="h-max w-full">
            <Link href={"/register"} className="py-2 px-5 rounded bg-primary text-background">Join Now</Link>
          </div>
        </div>
        <div className="h-137.5 w-2/5">
          <div className="relative h-full w-full">
            <Image src="/social-media-marketing-phone-style.png" fill className="object-fill" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
    {/* Hero Section Ends */}
    {/* How it works Begins */}
    <HowItWorks />
    {/* How it works Ends */}
    {/* Commission structure Starts */}
    <CommissionStructure />
    {/* Commission structure Ends */}
    {/* Aucience Starts */}
    <WhoCanJoin />
    {/* Aucience Ends */}
    {/* Benefits Begins */}
    <AffiliateBenefits />
    {/* Benefits Ends */}
    {/* FAQs Begins */}
    <AffiliateFAQ />
    {/* FAQs Ends */}
    </>
  );
}
