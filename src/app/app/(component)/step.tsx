
type StepProps = {
    title: string,
    description: string
}
export default function Step({title, description}: StepProps) {
    return(
        <div className="flex-1 flex flex-col items-start justify-center">
            <div className=" flex flex-col items-start lg:flex-row gap-3">
                <div className="w-fit">
                    <h2 className="text-sm bg-blue-500 text-white px-2 py-1 rounded-lg border border-blue-600 ">
                       {title}
                    </h2>
                </div>
                <div className="w-fit">
                    <p className="text-gray-700 ">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
