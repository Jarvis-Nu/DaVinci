import Image from "next/image";

export default function Ecosystem() {
    return(
        <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] bg-ash space-y-[32px]">
            <div className="w-full">
                <h1 className="text-[36px] leading-[44px] text-center lg:text-[60px] lg:leading-[73px] font-semibold">
                    Ecosystem
                </h1>
            </div>
            <div className="flex justify-center">
                <Image src={"/fil.png"} alt="" width={300} height={100} />
            </div>
        </div>
    )
}