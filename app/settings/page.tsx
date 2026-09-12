import SettingsContent from "@/components/pages/Settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - IruHost Affiliate Program",
};

const Settings = () => {
    return ( 
        <>
        <SettingsContent />
        </>
     );
}
 
export default Settings;