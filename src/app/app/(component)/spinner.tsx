import Spin from "@/app/_components/icons/spin";


export default function Spinner() {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="animate-spin">
                <Spin />
            </div>
            <p>Ai searching</p>
        </div>
    )
}
