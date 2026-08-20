import Image from "next/image";

const Loading = () => {
    return ( 
        <>
        <div className="relative h-4 w-4">
            <Image src="/loading.gif" fill alt="loading" className="object-fill" />
        </div>
        </>
     );
}
 
export default Loading;