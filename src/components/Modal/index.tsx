import { useEffect, useRef } from "react";
import styles from "./style.module.css";

type PropType = {
    closeModal: Function,
    render: Function
}

const Modal = ({closeModal, render}: PropType): JSX.Element => {

    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickEvent = (event: MouseEvent)=>{
        event.stopPropagation();
        if(event.target instanceof Node && event.target?.contains(modalRef.current)){
            closeModal();
        }
    }

    useEffect(()=>{
        window.addEventListener("click", handleClickEvent);
        return ()=>{
            window.removeEventListener("click", handleClickEvent)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={modalRef} className={styles["modal-container"]}>
            <div className={styles["modal"]}>
                {
                    render()
                }
            </div>
        </div>
    )
}


export default Modal;