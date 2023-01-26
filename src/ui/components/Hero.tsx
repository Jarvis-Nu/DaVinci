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
        </div>
    )
}