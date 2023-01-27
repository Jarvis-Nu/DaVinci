import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";

export default function Introduction() {
    return(
        <div className="p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px]">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-10 items-center space-y-5 lg:space-y-0">
                <div className="w-full max-w-[500px] space-y-5">
                    <h1 className="text-[36px] leading-[44px] text-center lg:text-start lg:text-[60px] lg:leading-[73px] font-semibold">
                        Introduction To  <span className="text-purple underline underline-offset-8">Amadeus</span>
                    </h1>
                    <div className="w-full flex flex-col space-y-5">
                        <div className="flex items-center space-x-2 sm:space-x-0">
                            <CheckIcon className="text-purple w-[40px] h-[36px] sm:w-[20px] sm:h-[18px]" />
                            <p className="leading-[36px]">Nec at odio integer vivamus consectetur risus</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-0">
                            <CheckIcon className="text-purple w-[40px] h-[36px] sm:w-[20px] sm:h-[18px]" />
                            <p className="leading-[36px]">Nec at odio integer vivamus consectetur risus</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-0">
                            <CheckIcon className="text-purple w-[40px] h-[36px] sm:w-[20px] sm:h-[18px]" />
                            <p className="leading-[36px]">Nec at odio integer vivamus consectetur risus</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-0">
                            <CheckIcon className="text-purple w-[40px] h-[36px] sm:w-[20px] sm:h-[18px]" />
                            <p className="leading-[36px]">Nec at odio integer vivamus consectetur risus</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-0">
                            <CheckIcon className="text-purple w-[40px] h-[36px] sm:w-[20px] sm:h-[18px]" />
                            <p className="leading-[36px]">Nec at odio integer vivamus consectetur risus</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[450px]">
                    <Image src={"/intro.png"} width={450} height={450} alt="" />
                </div>
            </div>
        </div>
    )
}