import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] bg-ash space-y-5 
            flex flex-col md:flex-row md:space-y-0 md:space-x-[140px] justify-center items-center">
            <div className="w-[300px] space-y-5 flex flex-col items-center">
                <div className="max-w-[250px] relative">
                    <Image src={"/logo.png"} width={250} height={75} alt="" />
                </div>
                <div>
                    <p className="font-semibold">helpdesk@amadeus.com | +65 93501874</p>
                </div>
            </div>
            <div className="max-w-[300px] md:max-w-[550px] space-y-5">
                <h5 className="text-[24px] leading-[24px] font-semibold">Subscribe to our newsletter</h5>
                <div className="flex">
                    <input type="email" placeholder="Enter you email" className="w-[300px] bg-purple/10 p-2.5 rounded-3xl placeholder-black outline-none" />
                    <button className="bg-purple text-white py-2.5 px-8 rounded-3xl -ml-20">Subscribe</button>
                </div>
                <div>
                    <h6 className="sm:text-[20px] leading-[30px] text-center md:text-start">
                        Stay in the loop and be the first to know with our exclusive newsletter! Subscribe now and never miss a thing
                    </h6>
                </div>
                <div className="flex space-x-1.5">
                    <Link href={"/"}>
                        <div className="relative max-w-[20px] max-h-[20px]">
                            <Image src={"/twitter.png"} width={20} height={20} alt="" />
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="relative max-w-[20px] max-h-[20px]">
                            <Image src={"/discord.png"} width={20} height={20} alt="" />
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="relative max-w-[20px] max-h-[20px]">
                            <Image src={"/tele.png"} width={20} height={20} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}