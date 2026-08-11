'use client'

import Image from "next/image";
import { ShieldCheck, CreditCard, Headset, Lock, Mail, Eye, EyeOff, ArrowLeft, MailCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ForgetPassword = () => {

    const router = useRouter();

    type User = {
        email: string;
        password: string;
        confirmPassword: string
    }

    const [error, setError] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [codeSent, setCodeSent] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        code: ''
    })

    const showPassword = () => {
        setPasswordVisible(true);
    }

    const hidePassword = () => {
        setPasswordVisible(false);
    }

    const seeConfirm = () => {
        setConfirmVisible(true);
    }

    const hideConfirm = () => {
        setConfirmVisible(false);
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
                <h2 className="text-4xl text-accent text-center font-bold">Reset Your Passwor <br></br> We&lsquo;ve <span className="text-primary">Got You.</span></h2>
                <p className="text-accent text-base text-center">No worries! Enter your email address and we&rsquo;ll<br></br>send you a code to reset your password.</p>
                <div className="relative h-62.5 w-100">
                    <Image src="/computer-security-with-login-password-padlock.png" className="" fill alt="dashbord" />
                </div>
                <div className="h-max w-full flex px-20">
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <ShieldCheck className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Secure & Safe</h2>
                        <p className="text-sm text-grey text-center">Your account is protected with industry standard security.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <Mail className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Quick & Easy</h2>
                        <p className="text-sm text-grey text-center">Reset your password in just few steps.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <Headset className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Need Help?</h2>
                        <p className="text-sm text-grey text-center">Our support team is always here for you 24/7.</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2 bg-accent flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-4/5 shadow px-10 py-10">
                    <div className="h-max w-full flex justify-center mb-5">
                        <Lock className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-center mb-5 font-bold text-3xl">Forget Password?</h2>
                    <p className="text-base text-center text-grey mb-5">Enter your email address and we&lsquo;ll send you<br></br>a secure code to reset your password.</p>
                    <div className="h-max w-full flex flex-col gap-2">
                        <div className={`w-full h-max py-2 text-accent bg-danger rounded text-center
                            ${error ? "" : "hidden"}
                            `}>{error}</div>
                        <div className={`h-max w-full relative
                            ${codeSent ? "hidden" : ""}
                            `}>
                            <label htmlFor="email" className="text-grey text-base">Email:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                            <div className="absolute top-8 left-3 h-max w-max">
                                <Mail className="h-5 w-5 text-grey" />
                            </div>
                        </div>
                        <div className={`h-max w-full flex flex-col gap-2
                            ${codeSent ? "" : "hidden"}
                            `}>
                            <div className="h-max w-full relative">
                                <label htmlFor="code" className="text-grey text-base">Code:</label>
                                <input type="text" id="code" name="code" value={formData.code} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                                <div className="absolute top-8 left-3 h-max w-max">
                                    <MailCheck className="h-5 w-5 text-grey" />
                                </div>
                            </div>
                            <div className="h-max w-full relative">
                                <label htmlFor="password" className="text-grey text-base">Password:</label>
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
                            <div className="h-max w-full relative">
                                <div className="h-max w-full flex items-center justify-between">
                                    <label htmlFor="confirmPassword" className="text-grey text-base">Confirm Password:</label>
                                </div>
                                <input type={confirmVisible ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                                <div className="absolute top-8 left-3 h-max w-max">
                                    <Lock className="h-5 w-5 text-grey" />
                                </div>
                                <button type="button" onClick={seeConfirm} className={`absolute top-8 left-[90%] h-max w-max cursor-pointer
                                    ${confirmVisible ? "hidden" : ""}
                                    `}>
                                    <Eye className="h-5 w-5 text-grey" />
                                </button>
                                <button type="button" onClick={hideConfirm} className={`absolute top-8 left-[90%] h-max w-max cursor-pointer
                                    ${confirmVisible ? "" : "hidden"}
                                    `}>
                                    <EyeOff className="h-5 w-5 text-grey" />
                                </button>
                            </div>
                            <div className="h-max w-full flex items-start gap-3 bg-primary/20 px-10 py-2 my-1">
                                <div className="bg-primary/50 rounded-full h-max w-max p-2">
                                    <ShieldCheck className="w-10 h-10 text-primary" />
                                </div>
                                <div className="h-max text-sm flex flex-col gap-1">
                                    <h3 className="font-bold text-base">Didn&lsquo;t receive an email?</h3>
                                    <div className="text-sm text-text/80">
                                        <p>Check your spam folder or</p>
                                        <button type="button" className="">try again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-max w-full">
                            <button type="submit" onClick={formSubmitted} className="h-max w-full text-background rounded py-3 text-center bg-primary text-base outline-none cursor-pointer">Send Reset Code</button>
                        </div>
                        <div className="h-max w-full flex justify-center items-center gap-2 mt-5">
                            <div className="h-max w-max">
                                <ArrowLeft className="h-5 w-10 text-primary" />
                            </div>
                            <Link href={"/login"} className="text-primary text-base">Back to Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default ForgetPassword;