import Image from "next/image";
import Link from "next/link";

interface Props {
    page: string
}

export default function Navbar({ page }: Props) {
    return(
        <div className="w-full px-[100px] py-[25px] flex justify-between items-center fixed inset-x-0 top-0 shadow-md shadow-black/10">
            <div className="relative max-w-[250px] max-h-[50px]">
                <Image src={"/logo.png"} width={250} height={50} alt={""} />
            </div>
            <div className="flex space-x-[40px]">
                <Link href={"/"} className={`font-semibold text-purple ${page == "home" ? "underline" : "hover:underline"} underline-offset-8 decoration-2`}>Upload</Link>
                <Link href={"/"} className={`font-semibold ${page == "connect" ? "underline text-purple" : "hover:underline hover:text-purple"}
                 underline-offset-8 decoration-2`}>Connect</Link>
            </div>
        </div>
    )
}