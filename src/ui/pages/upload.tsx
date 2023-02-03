import { SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Upload() {
    return (
        <div>
            <Head>
                <title>Upload</title>
            </Head>
            <main>
                <Navbar page="upload" />
                <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] mt-24">
                    <div className="p-10 rounded-2xl bg-white flex items-center justify-between">
                        <div>
                            <p className="text-ink font-semibold text-2xl">Upload your files</p>
                            <p className="text-ash">Add your music here. You can add up to five.</p>
                        </div>
                        <div className="flex items-center rounded-full pl-2.5">
                            <button>
                                <SearchIcon className="w-10 h-10 bg-purple/10 py-2.5 pl-0.5 rounded-l-full" />
                            </button>
                            <input type="text" className="w-48 h-10 border-black bg-purple/10 rounded-r-full outline-none" placeholder="Search your files" />
                        </div>
                    </div>
                </div>
                <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] mt-24">
                    <div className="p-10 rounded-2xl bg-white bg-purple/10">
                        <div>
                            <p className="text-ink font-semibold text-2xl">Upload your files</p>
                            <p>Add your music here. You can add up to five.</p>
                        </div>
                        <div>
                            <SearchIcon className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}