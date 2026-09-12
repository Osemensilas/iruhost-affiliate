import EarningsContent from "@/components/pages/Earnings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earnings - IruHost Affiliate Program",
};

const Earnings = () => {
    return ( 
        <>
        <EarningsContent />
        </>
     );
}
 
export default Earnings;