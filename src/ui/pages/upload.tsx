import { SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid"
import { Dialog, Transition } from "@headlessui/react"

export default function Upload() {
    const ref = useRef(null)
    const [file, setFile] = useState<FileList>()
    const [open, setOpen] = useState(false)
    const handleDrag = function(e: any) {
        e.preventDefault();
        e.stopPropagation();
        return false
    };
    const handleDrop = function(e: any) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          //console.log(e.dataTransfer.files);
          setFile(e.dataTransfer.files[0])
          setOpen(true)
        }
        return false
    };

    const handleChange = function(e: any) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            //console.log(e.target.files[0].name);
          setFile(e.target.files[0]);
          setOpen(true)
        }
    };
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
                            <input
                                type="text"
                                className="w-48 h-10 border-black bg-purple/10 rounded-r-full outline-none"
                                placeholder="Search your files"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="w-full p-20 bg-purple/10 rounded-3xl flex flex-col justify-center items-center space-y-2 hover:cursor-pointer" onClick={() => {
                        const fileRef: any = ref.current
                        fileRef.click()
                    }} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                        <div className="w-full flex flex-col items-center justify-center">
                            <div>
                                <Image src={"/upload.png"} alt={""} width={50} height={50} />
                            </div>
                            <div className="space-y-1.5">
                                <p className="text-ink font-semibold text-[24px]">Upload or drag and drop your file here</p>
                                <p className="text-ash text-center text-lg">100MB max size file</p>
                            </div>
                        </div>
                        <input type="file" ref={ref}  className="hidden" onChange={handleChange} />
                    </div>
                </div>
            </main>
            <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    onClose={() => setOpen(false)}
                >
                    <div className="flex items-center justify-center
                        min-h-[800px] sm:min-h-screen pt-4 pb-20
                        text-center sm:block sm:p-0"
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay
                                className="fixed inset-0 bg-gray-500 bg-opacity-75
                                transition-opacity"
                            />
                        </Transition.Child>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                        overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div className="space-y-1.5">
                                <div className="space-y-1.5">
                                    <p className="text-ink font-semibold text-[24px]">Name of file <span className="text-red-500">*</span></p>
                                    <input type={"text"} className="w-full p-2.5 border-2 border-ash rounded-xl outline-none" placeholder="Your file name here" />
                                </div>
                                <div className="space-y-1.5">
                                    <p className="text-ink font-semibold text-[24px]">Description <span className="text-red-500">*</span></p>
                                    <textarea className="w-full border-2 p-2.5 border-ash rounded-xl h-40 outline-none" placeholder="Describe this file" />
                                </div>
                                <div className="flex space-x-2.5 justify-end">
                                    <button className="px-10 py-2.5 bg-white border-purple border-2 rounded-3xl text-purple" onClick={() => setOpen(false)}>Cancel</button>
                                    <button className="px-10 py-2.5 bg-purple rounded-3xl text-white">Confirm</button>
                                </div>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            </div>
        </div>
    )
}