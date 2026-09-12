import ResourcesContent from "@/components/pages/Resources";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - IruHost Affiliate Program",
};

const Resources = () => {
    return ( 
        <>
        <ResourcesContent />
        </>
     );
}
 
export default Resources;