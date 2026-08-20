'use client';

import axios from "axios";
import { Bell, Menu, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

const DashHeader = () => {

    interface UserData{
        name: string;
        userId: string
    }

    const [userData, setUserData] = useState<UserData>({
        name: '',
        userId: ''
    });

    useEffect(() => {

        async function getUser(){
            try {
                const url = "http://127.0.0.1:8000/api/fetch-user";
                const token = localStorage.getItem('token');

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.data.status === "success"){
                    console.log(response.data.user);
                    setUserData({
                        name: response.data.user.firstname + " " + response.data.user.lastname,
                        userId: response.data.user.user_id
                    });
                }
            } catch (error) {
                if (axios.isAxiosError(error)){
                    console.log(error.response);
                }
            }
        }
        getUser();
    },[])

    return ( 
        <>
        <div className="h-full w-full flex justify-between items-center">
            <button type="button" className="cursor-pointer h-max w-max">
                <Menu className="text-2xl text-grey" />
            </button>
            <div className="h-max w-max flex items-center gap-10">
                <div className="relative h-max w-max">
                    <Bell className="text-2xl text-grey" />
                    <div className="absolute -top-3 left-[60%] bg-danger p-2 rounded-full h-5 w-5 flex items-center justify-center">
                        <p className="text-sm text-accent">1</p>
                    </div>
                </div>
                <div className="h-max w-max flex items-start gap-2">
                    <div className="h-max w-max">
                        <UserCircle size={40} className="text-5xl text-grey" />
                    </div>
                    <div className="h-max w-max flex flex-col gap-0.5">
                        <h3 className="font-bold text-grey text-base">Welcome, {userData.name}</h3>
                        <p className="text-sm text-grey">Affiliate ID: {userData.userId}</p>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashHeader;