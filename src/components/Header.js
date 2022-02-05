import "../assets/styles/header.css"
import {useEffect, useState} from "react";
import Modal from "./Modal";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Header = (props) => {
    const [modalSignUpActive, setSighUpModalActive] = useState(false)
    const [modalLoginActive, setLoginModalActive] = useState(false)
    const checkValue = () => {
        return (props.basket >= 0) ? <div className='header__basket-value'>{props.basket}</div> : <div className='header__basket-value'>0</div>
    }
    const checkSum = () => {
        return (props.sum >= 0) ? <div className='header__basket-value'>{props.sum}</div> : <div className='header__basket-value'>0</div>
    }

    return(
        <div>
            <div className='header'>
                <div className="header__container container">
                    <div className="header__logo">
                        <img src={require("../assets/images/LoginLogo.png")} alt="" className="header__logo-img"/>
                    </div>
                    <div className="header__menu">
                        <div className="header__menu-items">
                            <div className="header__menu-item">
                                <button className="login" onClick={() => {setLoginModalActive(true)}}>
                                    Login
                                </button>
                                <Modal active={modalLoginActive} setActive={setLoginModalActive}>
                                    <LoginForm />
                                </Modal>
                            </div>
                            <div className="header__menu-item">
                                <button className="login" onClick={() => {setSighUpModalActive(true)}}>
                                    Sign up
                                </button>
                                <Modal active={modalSignUpActive} setActive={setSighUpModalActive}>
                                    <SignUpForm/>
                                </Modal>
                            </div>
                            <div className="header__menu-item">
                                <img src={require(`../assets/images/Iconly/Bulk/Buy.png`)} alt="" className="header__menu-img"/>
                            </div>
                            <div className="header__menu-info">
                                 В корзине {checkValue()} позиций на сумму {checkSum()}
                            </div>
                        </div>
                        <div className="header__account">
                            <div className="header__account-img">
                                <img src={require(`../assets/images/header_account_img.png`)} alt="" className="header__account-image"/>
                            </div>
                            <div className="header__account-info">
                                <div className="header__account-name">Customer name</div>
                                <div className="header__account-position">Customer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header