import {useState} from "react";
import RestaurantsFoodDetails from "./RestaurantsFoodDetails";
import Modal from "../Modal";
import {Link} from "react-router-dom";

const RestaurantsFoodItem = (props) => {

    const [modalActive, setModalActive] = useState(false)
    return(
        <div>
            <div className="restaurant__food-item restaurant__food-item_active">
                <div className="restaurant__food-item-img">
                    <img src={require(`../../assets/images/${props.img}`)} alt="" className='restaurant__food-item-img'/>
                </div>
                <button className="restaurant__food-item-title restaurant__food-item-title_active" onClick={() => setModalActive(true)}>
                    <Link to ={`/${props.id}`}>{props.name}</Link>
                </button>
                <div className="restaurant__food-item-price">
                    {props.price}$
                </div>
                <div>
                    <img src={require(`../../assets/images/add-to-basket.png`)} alt="" className='restaurant__food-item-view-img'/>
                </div>

            </div>
        </div>
    )
}

export default RestaurantsFoodItem