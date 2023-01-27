import Image from "next/image";
import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/solid"

interface Props {
    page: string
}

export default function Navbar({ page }: Props) {
    return(
        <div className="w-full">
            <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] flex justify-between items-center fixed
            inset-x-0 top-0 shadow-md shadow-black/10">
                <div className="relative max-w-[140px] lg:max-w-[250px] max-h-[50px]">
                    <Image src={"/logo.png"} width={250} height={50} alt={""} />
                </div>
                <div className="sm:flex space-x-[40px] hidden">
                    <Link href={"/"} className={`font-semibold text-purple ${page == "home" ? "underline" : "hover:underline"} underline-offset-8 decoration-2`}>Upload</Link>
                    <Link href={"/"} className={`font-semibold ${page == "connect" ? "underline text-purple" : "hover:underline hover:text-purple"}
                    underline-offset-8 decoration-2`}>Connect</Link>
                </div>
                <button className="sm:hidden" onClick={() => document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}>
                    <MenuAlt3Icon className="w-[40px] h-[40px]" />
                </button>
            </div>
            <div className="w-64 shadow-lg shadow-black/10 h-screen absolute inset-y-0 left-0 z-20 bg-white 
            -translate-x-full sidebar translation duration-300 ease-in-out p-[20px]">
            <div className="flex flex-col space-y-[15px]">
                <Link href={"/"} className={`font-semibold text-purple ${page == "home" ? "underline" : "hover:underline"} underline-offset-8 decoration-2`}>Upload</Link>
                <Link href={"/"} className={`font-semibold ${page == "connect" ? "underline text-purple" : "hover:underline hover:text-purple"}
                underline-offset-8 decoration-2`}>Connect</Link>
            </div>
            </div>
        </div>
    )
}