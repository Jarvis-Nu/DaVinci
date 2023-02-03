import { SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { CloudUploadIcon } from "@heroicons/react/solid"
import Image from "next/image";

export default function Upload() {
    return (
        <div>
            <Head>
                <title>Upload</title>
            </Head>
            <main>
                <Navbar page="upload" />
                <div className="w-full p-[20px] sm:px-[40px] sm:pt-[25px] xl:px-[100px] lg:pt-[25px] mt-24 space-y-8">
                    <div className="rounded-2xl bg-white flex items-center justify-between">
                        <div>
                            <p className="text-ink font-semibold text-[24px]">Upload your files</p>
                            <p className="text-ash">Add your music here. You can add up to five.</p>
                        </div>
                        <div className="flex items-center rounded-full pl-2.5">
                            <button>
                                <SearchIcon className="w-10 h-10 bg-purple/10 py-2.5 pl-0.5 rounded-l-full text-ash" />
                            </button>
                            <input type="text" className="w-48 h-10 border-black bg-purple/10 rounded-r-full outline-none" placeholder="Search your files" />
                        </div>
                    </div>
                    <div className="w-full p-20 bg-purple/10 rounded-3xl flex flex-col justify-center items-center space-y-2.5">
                        <div>
                            <Image src={"/upload.png"} alt={""} width={50} height={50} />
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-ink font-semibold text-[24px]">Upload or drag and drop your file here</p>
                            <p className="text-ash text-center text-lg">100MB max size file</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}