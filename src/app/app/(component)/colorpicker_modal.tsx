"use client"
import Modal from "@/app/app/(component)/modal/modal";
import ColorPicker from "@/components/next-iro/colorPicker";
import React , {useContext , useState} from "react";
import { useColorContext} from "@/app/_components/color_context";


export default function ColorChoose() {
    const [modal, setModal] = useState<boolean>(false);
     const {selectedColor} = useColorContext()
    const handleOnCloseModal = () => {
        setModal(false);
    }
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal')) {
           setModal(false)
        }
    };

    React.useEffect(() => {
        if (modal) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('touchstart', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.addEventListener('touchstart', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [modal]);
    const handleOnOpenModal = () => {
        setModal(true)
    }
    return(
        <div className="w-full md:w-fit">
            <button onClick={handleOnOpenModal}>
                <div className="w-52 h-12  rounded-md" style={{ backgroundColor: selectedColor ? selectedColor : "black" }} />
            </button>
            <Modal shouldShowModal={modal} handleOnCLoseModal={handleOnCloseModal}>
                <ColorPicker />
            </Modal>
        </div>
    )
}
