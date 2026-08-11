'use client'

import Image from "next/image";
import { UserPlus, Users, CreditCard, ChartNoAxesCombined, User, Mail, Lock, Globe, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Register = () => {

    const router = useRouter();

    type User = {
        firstname: string;
        lastname: string,
        email: string;
        password: string;
        confirmPassword: string;
        country: string;
    }

    const [error, setError] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
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

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async () => {

        if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !formData.confirmPassword || !formData.country){
            setError("All fields required");
            return;
        }

        if (formData.password !== formData.confirmPassword){
            setError("Password do not match");
            return;
        }

        setError("");

        console.log(formData);

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
                <h2 className="text-4xl text-accent text-center font-bold">Join IruHost <br></br><span className="text-primary">Affiliate </span>Program</h2>
                <p className="text-accent text-base text-center">Create your affliate account and start earning<br></br>commissions by referring IruHost services.</p>
                <div className="relative h-62.5 w-100">
                    <Image src="/computer-security-with-login-password-padlock.png" className="object-fill" fill alt="dashbord" />
                </div>
                <div className="h-max w-full flex px-20">
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <Users className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Easy to Join</h2>
                        <p className="text-sm text-grey text-center">Sign up for free and get your unique referral.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <ChartNoAxesCombined className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Earn More</h2>
                        <p className="text-sm text-grey text-center">Earn attractive commissions for every successful referrals.</p>
                    </div>
                    <div className="h-max w-[30%] flex items-center justify-center flex-col gap-2">
                        <div className="h-max w-max rounded-full p-5 bg-primary/20">
                            <CreditCard className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-base font-bold text-accent">Timely Payouts</h2>
                        <p className="text-sm text-grey text-center">We pay on time, everytime, no hassle.</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2 bg-accent flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-4/5 shadow px-10 py-10">
                    <div className="h-max w-full flex justify-center mb-5">
                        <UserPlus className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-center mb-5 font-bold text-3xl">Create Your <span className="text-primary">Account</span></h2>
                    <p className="text-base text-center text-grey mb-5">Fill in the details below to get started.</p>
                    <div className="h-max w-full flex flex-col gap-2">
                        <div className={`w-full h-max py-2 text-accent bg-danger rounded text-center
                            ${error ? "" : "hidden"}
                            `}>{error}</div>
                        <div className="h-max w-full flex items-center gap-2">
                            <div className="h-max w-full relative">
                                <label htmlFor="firstname" className="text-grey text-base">First Name:</label>
                                <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                                <div className="absolute top-8 left-3 h-max w-max">
                                    <User className="h-5 w-5 text-grey" />
                                </div>
                            </div>
                            <div className="h-max w-full relative">
                                <label htmlFor="lastname" className="text-grey text-base">Last Name:</label>
                                <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                                <div className="absolute top-8 left-3 h-max w-max">
                                    <User className="h-5 w-5 text-grey" />
                                </div>
                            </div>
                        </div>
                        <div className="h-max w-full relative">
                            <label htmlFor="email" className="text-grey text-base">Email:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                            <div className="absolute top-8 left-3 h-max w-max">
                                <Mail className="h-5 w-5 text-grey" />
                            </div>
                        </div>
                        <div className="h-max w-full flex items-center gap-2">
                            <div className="h-max w-full relative">
                                <div className="h-max w-full flex items-center justify-between">
                                    <label htmlFor="password" className="text-grey text-base">Password:</label>
                                </div>
                                <input type={passwordVisible ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm" />
                                <div className="absolute top-8 left-3 h-max w-max">
                                    <Lock className="h-5 w-5 text-grey" />
                                </div>
                                <button type="button" onClick={showPassword} className={`absolute top-8 left-[85%] h-max w-max cursor-pointer
                                    ${passwordVisible ? "hidden" : ""}
                                    `}>
                                    <Eye className="h-5 w-5 text-grey" />
                                </button>
                                <button type="button" onClick={hidePassword} className={`absolute top-8 left-[85%] h-max w-max cursor-pointer
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
                                <button type="button" onClick={seeConfirm} className={`absolute top-8 left-[85%] h-max w-max cursor-pointer
                                    ${confirmVisible ? "hidden" : ""}
                                    `}>
                                    <Eye className="h-5 w-5 text-grey" />
                                </button>
                                <button type="button" onClick={hideConfirm} className={`absolute top-8 left-[85%] h-max w-max cursor-pointer
                                    ${confirmVisible ? "" : "hidden"}
                                    `}>
                                    <EyeOff className="h-5 w-5 text-grey" />
                                </button>
                            </div>
                        </div>
                        <div className="h-max w-full relative">
                            <label htmlFor="country" className="text-grey text-base">Country:</label>
                            <select name="country" id="country" onChange={handleChanged} className="h-10 w-full border border-grey outline-none rounded px-10 text-sm text-grey">
                                <option value="">Select your country</option>
                                <option value="nigeria">Nigeria</option>
                            </select>
                            <div className="absolute top-8 left-3 h-max w-max">
                                <Globe className="h-5 w-5 text-grey" />
                            </div>
                        </div>
                        <div className="h-max w-full flex items-center gap-2">
                            <input type="checkbox" id="remember" className="cursor-pointer" />
                            <label htmlFor="remember" className="text-base cursor-pointer text-grey">Remember Me</label>
                        </div>
                        <div className="h-max w-full">
                            <button type="submit" onClick={formSubmitted} className="h-max w-full text-background rounded py-3 text-center bg-primary text-base outline-none cursor-pointer">Sign In</button>
                        </div>
                        <div className="h-max w-full flex items-center gap-2 text-base text-grey">
                            Already an account? <Link href={"/login"} className="text-primary">Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Register;