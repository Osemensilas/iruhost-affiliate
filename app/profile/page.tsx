import ProfileContent from "@/components/pages/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - IruHost Affiliate Program",
};

const Profile = () => {
    return ( 
        <>
        <ProfileContent />
        </>
     );
}
 
export default Profile;