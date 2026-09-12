import RegisterComponent from "@/components/user/RegisterComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - IruHost Affiliate Program",
};

const Register = () => {

    return ( 
        <>
        <RegisterComponent />
        </>
     );
}
 
export default Register;