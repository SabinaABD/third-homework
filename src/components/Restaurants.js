import "../assets/styles/restaurants.css"
import RestaurantsFoodItem from "./restaurants/RestaurantsFoodItem";
import RestaurantsFoodDetails from "./restaurants/RestaurantsFoodDetails";
import {useEffect, useState} from "react";
import Modal from "./Modal";
import useModals from "../useModals";


const Restaurants = () => {
    const [food, setFood] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/food-items')
            .then((response) => response.json()
                .then((response) => setFood(response)))
    }, [])

    const restaurantsFoodItems = food.map(elem => <RestaurantsFoodItem  id = {elem.id} name = {elem.name} img = {elem.img} price = {elem.price} />)

    return (
        <div>
            <div className="restaurants">
                <div className="restaurants__inner">
                    <div className="restaurants__header">
                        <div className="restaurants__title">
                            Restaurants
                        </div>
                    </div>
                    <div className="restaurant__food-items" >
                        {restaurantsFoodItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurants
