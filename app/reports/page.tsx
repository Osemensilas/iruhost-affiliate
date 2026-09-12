import ReportsContent from "@/components/pages/Reports";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports - IruHost Affiliate Program",
};

const Reports = () => {
    return ( 
        <>
        <ReportsContent />
        </>
     );
}
 
export default Reports;