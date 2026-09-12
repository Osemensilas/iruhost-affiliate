import AffiliateDashboard from "@/components/pages/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - IruHost Affiliate Program",
};

const Dashboard = () => {
    return ( 
        <>
        <div className="w-full h-screen">
            <AffiliateDashboard />
        </div>
        </>
     );
}
 
export default Dashboard;