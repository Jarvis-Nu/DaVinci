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
            </main>
        </div>
    )
}