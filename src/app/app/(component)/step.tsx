
type StepProps = {
    title: string,
    description: string
}
export default function Step({title, description}: StepProps) {
    return(
        <div className="w-full flex flex-col items-start justify-center">
            <div className=" flex flex-col items-start lg:flex-row gap-3">
                <div className="">
                    <h2 className="text-sm ">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full border border-blue-600">{title}</span>
                    </h2>
                </div>
                <div className="lg:w-5/6">
                    <p className="text-gray-700 ">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
