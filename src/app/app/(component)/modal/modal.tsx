import React from "react";
import {CgClose} from "react-icons/cg";



interface ModalProps {
    children: React.ReactNode,
    shouldShowModal?: boolean,
    handleOnCLoseModal?: () => void  ,
}
export default function Modal(props: ModalProps){
    const {children, shouldShowModal, handleOnCLoseModal} = props;

    return(
        <React.Fragment>
            {
                shouldShowModal &&
                <div className=" modal w-full h-full   shadow bg-opacity-50 inset-0 absolute transition-all">
                    <div
                        className="flex justify-center items-center z-50 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 p-6  min-h-40 rounded-lg min-w-40 dark:bg-background"
                    >
                        { children }
                    </div>
                </div>
            }
        </React.Fragment>

    )
}
