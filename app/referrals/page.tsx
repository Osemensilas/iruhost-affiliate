import ReferralsPage from "@/components/pages/Referrals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals - IruHost Affiliate Program",
};

const Referrals = () => {
    return ( 
        <>
        <ReferralsPage />
        </>
     );
}
 
export default Referrals;