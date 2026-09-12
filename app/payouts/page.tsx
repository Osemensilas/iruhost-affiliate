import PayoutsContent from "@/components/pages/Payouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payouts - IruHost Affiliate Program",
};

const Payouts = () => {
    return ( 
        <>
        <PayoutsContent />
        </>
     );
}
 
export default Payouts;