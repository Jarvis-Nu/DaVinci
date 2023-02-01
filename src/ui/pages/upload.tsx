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
                    <div>
                        <div>
                            <p className="text-ink">Upload your files</p>
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