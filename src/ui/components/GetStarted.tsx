export default function GetStarted() {
    return(
        <div className="w-full p-[20px] sm:px-[40px] sm:py-[25px] xl:px-[100px] lg:py-[25px] bg-ash space-y-5">
            <div className="w-full">
                <h1 className="text-[36px] leading-[44px] text-center lg:text-[60px] lg:leading-[73px] font-semibold">
                    Get Started
                </h1>
            </div>
            <div className="w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5 justify-center items-center">
                <div className="w-[300px] p-10 rounded-3xl bg-white space-y-5 lg:w-[400px] text-center">
                    <p>I am a decentralized data human</p>
                    <button className="bg-purple text-white p-2.5 w-full rounded-3xl">Data DAO Participant</button>
                </div>
                <div className="w-[300px] p-10 rounded-3xl bg-white space-y-5 lg:w-[400px] text-center">
                    <p>I am a decentralized data human</p>
                    <button className="bg-purple text-white p-2.5 w-full rounded-3xl">Storage User</button>
                </div>
            </div>
        </div>
    )
}