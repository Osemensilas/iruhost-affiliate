import ForgetPasswordComponent from "@/components/user/ForgetComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password - IruHost Affiliate Program",
};

const ForgetPassword = () => {
    return ( 
        <>
        <ForgetPasswordComponent />
        </>
     );
}
 
export default ForgetPassword;