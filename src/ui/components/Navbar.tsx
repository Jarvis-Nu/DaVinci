import Image from "next/image";
import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Props {
    page: string
}

export default function Navbar({ page }: Props) {
    return(
        <div className="w-full absolute inset-x-0 top-0">
            <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] flex justify-between items-center shadow-md shadow-black/10 bg-white">
                <div className="relative max-w-[140px] lg:max-w-[250px] max-h-[50px]">
                    <Image src={"/logo.png"} width={250} height={50} alt={""} />
                </div>
                <div className="sm:flex space-x-[40px] hidden items-center">
                    <Link href={"/"} className={`font-semibold ${page == "home" ? "underline text-purple" : "hover:underline hover:text-purple"}
                     underline-offset-8 decoration-2`}>Home</Link>
                    <Link href={"/upload"} className={`font-semibold ${page == "upload" ? "underline text-purple" : "hover:underline hover:text-purple"}
                    underline-offset-8 decoration-2`}>Upload</Link>
                    <div>
                        <ConnectButton chainStatus="icon" accountStatus={{smallScreen: 'avatar', largeScreen: 'full'}} showBalance={{smallScreen: false, largeScreen: true}} />
                    </div>
                </div>
                <button className="sm:hidden" onClick={() => document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}>
                    <MenuAlt3Icon className="w-[40px] h-[40px]" />
                </button>
            </div>
            <div className="w-64 shadow-lg shadow-black/10 h-screen absolute inset-y-0 left-0 z-20 bg-white 
            -translate-x-full sidebar translation duration-300 ease-in-out p-[20px] sm:hidden">
            <div className="flex flex-col space-y-[15px]">
                <ConnectButton 
                    chainStatus="icon"
                    accountStatus={{smallScreen: 'avatar', largeScreen: 'full'}}
                    showBalance={{smallScreen: false, largeScreen: true}} />
                <Link href={"/"} className={`font-semibold ${page == "home" ? "underline text-purple" : "hover:underline hover:text-purple"}
                 underline-offset-8 decoration-2`}>
                    Home
                </Link>
                <Link href={"/upload"} className={`font-semibold ${page == "upload" ? "underline text-purple" : "hover:underline hover:text-purple"}
                underline-offset-8 decoration-2`}>Upload</Link>
            </div>
            </div>
        </div>
    )
}