import React from "react";
import '../assets/styles/modal.css'
import RestaurantsFoodDetails from "./restaurants/RestaurantsFoodDetails";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} >
            <div className={active ? "modal__content active" : "modal__content"}  onClick={(e) => e.stopPropagation() }>
                <button className='modal__button'>
                    <img src={require("../assets/images/close.png")} alt="close-cross" onClick={() => {setActive(false)}} className='modal__button-img'/>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal