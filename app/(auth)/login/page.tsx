import LoginComponent from "@/components/user/LoginComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - IruHost Affiliate Program",
};

const Login = () => {
    return ( 
        <>
        <LoginComponent />
        </>
     );
}
 
export default Login;