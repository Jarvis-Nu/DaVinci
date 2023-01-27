import Image from "next/image";
import Navbar from "./Navbar";

interface Props {
    page: string
}

export default function Hero({ page }: Props) {
    return(
        <div className="w-full">
            <div>
                <Navbar page={page} />
            </div>
            <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] h-full mt-28 lg:mt-36">
                <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-10 items-center">
                    <div className="w-full max-w-[500px] lg:max-w-[700px] space-y-5">
                        <h1 className="text-[36px] leading-[44px] text-center lg:text-start lg:text-[60px] lg:leading-[73px] font-semibold">
                            A <span className="text-purple underline underline-offset-8">Decentralized</span> Audio 
                        Curation Platform and Database <span className="text-purple underline underline-offset-8">DAO</span>
                        </h1>
                        <h6 className="text-[16px] leading-[20px] lg:text-[24px] lg:leading-[36px] text-center lg:text-start">
                            Welcome to the Music Data DAO, where we use blockchain technology to empower musicians and music industry professionals.
                        </h6>
                    </div>
                    <div className="w-full max-w-[450px]">
                        <Image src={"/music.png"} width={450} height={450} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}