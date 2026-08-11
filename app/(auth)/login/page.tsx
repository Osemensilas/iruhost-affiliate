'use client'

import Image from "next/image";
import { ShieldCheck, CreditCard, Headset, Lock, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {

    const router = useRouter();

    type User = {
        email: string;
        password: string;
    }

    const [error, setError] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const showPassword = () => {
        setPasswordVisible(true);
    }

    const hidePassword = () => {
        setPasswordVisible(false);
    }

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async () => {

        if (!formData.email || !formData.password){
            setError("All fields required");
            return;
        }

        setError("");

        const url = "https://localhost:8000/login";

        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type" : "application/json"
            },withCredentials: true
        });

        console.log(response.data);

        if (response.data === "success"){
            router.push("/dashboard");
        }
    }

    return ( 
        <>
        <section className="h-screen w-screen flex">
            <div className="h-full w-1/2 flex flex-col justify-between items-center py-5">
                <div className="relative h-10 w-15">
                    <Image src={"/logo.png"} fill alt="logo" className="object-fill" />
                </div>
                <h2 className="text-4xl text-accent text-center font-bold">Welcome Back! <br></br> Let us <span className="text-primary">Grow Together</span></h2>
                <p className="text-accent text-base text-center">Sign in to your affliate account <br></br>and see your progress and earnings.</p>
                <div className="relative h-62.5 w-62.5">
                    <Image src="/" className="" fill alt="dashbord" />
                </div>
                <div className="h-max w-full flex px-20">
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <ShieldCheck className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Trusted & Secure</h2>
                        <p className="text-sm text-grey text-center">Your data is safe with us.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <CreditCard className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Timely Payment</h2>
                        <p className="text-sm text-grey text-center">We pay on time, every time.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <Headset className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">24/7 Support</h2>
                        <p className="text-sm text-grey text-center">We are here to help you.</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2 bg-accent flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-4/5 shadow px-10 py-10">
                    <div className="h-max w-full flex justify-center mb-5">
                        <Lock className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-center mb-5 font-bold text-3xl">Sign In</h2>
                    <p className="text-base text-center text-grey mb-5">Enter your details to access your<br></br>IruHost Affiliate dashboard.</p>
                    <div className="h-max w-full flex flex-col gap-2">
                        <div className={`w-full h-max py-2 text-accent bg-danger rounded
                            ${error ? "" : "hidden"}
                            `}>{error}</div>
                        <div className="h-max w-full relative">
                            <label htmlFor="email" className="text-grey text-base">Email:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                            <div className="absolute top-8 left-3 h-max w-max">
                                <Mail className="h-5 w-5 text-grey" />
                            </div>
                        </div>
                        <div className="h-max w-full relative">
                            <div className="h-max w-full flex items-center justify-between">
                                <label htmlFor="password" className="text-grey text-base">Password:</label>
                                <Link href="/forget-password" className="text-primary text-base">Forget Password?</Link>
                            </div>
                            <input type={passwordVisible ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                            <div className="absolute top-8 left-3 h-max w-max">
                                <Lock className="h-5 w-5 text-grey" />
                            </div>
                            <button type="button" onClick={showPassword} className={`absolute top-8 left-[90%] h-max w-max cursor-pointer
                                    ${passwordVisible ? "hidden" : ""}
                                    `}>
                                <Eye className="h-5 w-5 text-grey" />
                            </button>
                            <button type="button" onClick={hidePassword} className={`absolute top-8 left-[90%] h-max w-max cursor-pointer
                                    ${passwordVisible ? "" : "hidden"}
                                    `}>
                                <EyeOff className="h-5 w-5 text-grey" />
                            </button>
                        </div>
                        <div className="h-max w-full flex items-center gap-2">
                            <input type="checkbox" id="remember" className="cursor-pointer" />
                            <label htmlFor="remember" className="text-base cursor-pointer text-grey">Remember Me</label>
                        </div>
                        <div className="h-max w-full">
                            <button type="submit" onClick={formSubmitted} className="h-max w-full text-background rounded py-3 text-center bg-primary text-base outline-none cursor-pointer">Sign In</button>
                        </div>
                        <div className="h-max w-full flex items-center gap-2 text-base text-grey">
                            Don&#39;t have an account? <Link href={"/register"} className="text-primary">Join Now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Login;