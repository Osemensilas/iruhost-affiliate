import { Bell, Menu, User, UserCircle } from "lucide-react";

const DashHeader = () => {
    return ( 
        <>
        <div className="h-full w-full flex justify-between items-center">
            <button type="button" className="cursor-pointer h-max w-max">
                <Menu className="text-2xl" />
            </button>
            <div className="h-max w-max flex items-center gap-10">
                <div className="relative h-max w-max">
                    <Bell className="text-2xl" />
                    <div className="absolute -top-3 left-[60%] bg-danger p-2 rounded-full h-5 w-5 flex items-center justify-center">
                        <p className="text-sm text-accent">1</p>
                    </div>
                </div>
                <div className="h-max w-max flex items-start gap-2">
                    <div className="h-max w-max">
                        <UserCircle size={40} className="text-5xl" />
                    </div>
                    <div className="h-max w-max flex flex-col gap-0.5">
                        <h3 className="font-bold text-text text-base">Welcome, Osemen</h3>
                        <p className="text-sm text-text">Affiliate ID: Afdl_12883904jrn8y</p>
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