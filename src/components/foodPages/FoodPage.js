import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Home from "../Home";

const FoodPage = (props) => {
    const [item, setItem] = useState(0)

    const handleClick = () => {
        fetch(`http://localhost:3000/food-items/${props.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    "name": `${props.name}`,
                    "img": `${props.img}`,
                    "price": props.price,
                    "inStock": true,
                },
            )
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
            })

    }

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/food-items/${props.id}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response)
            })
    }, [setData])
    const [availableItems, setAvailableItems] = useState(10)


    //При первом рендере data.img = undefined, картинка не может подрузиться при undefined и приложение падает
    //пока не решу проблему, пусть ссылку на картинку компонент получает из пропса

    return(
        <div className='food-page'>
            <button className="food-page-back">
                <div className='food-page-back-link'>
                    <Link to='/' element={<Home/>}>Назад к меню</Link>
                </div>
            </button>
            <div className="food-details">
                <div className="food-details-item">
                    <div className="food-details__img">
                        <img src={require(`../../assets/images/${props.img}`)} alt="" className='food-details__img-img'/>
                    </div>
                    <div className="food-details__content">
                        <div className="food-details__content-title">
                            {data.name}
                        </div>
                        <div className="food-details__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu.
                            Euismod neque ultricies eget adipiscing condimentum.
                        </div>
                        <div className="food-details__content-in-stock">
                            {(availableItems > 0 ) && <div className='food-details__inline'>{availableItems}</div> || <div className='food-details__inline'>0</div>} items is available
                        </div>
                    </div>
                </div>
                <div className="food-details__add">
                    <div className="add__count">
                        <button onClick= {()=> {
                            props.parentHandleDelete(data.price)
                            setItem(item - 1)
                            setAvailableItems(availableItems + 1)
                        }}>
                            <img src={require('../../assets/images/cancel.png')} alt="" className='add__count-btn'/>
                        </button>
                        <div className="add__count-number">
                            {(item >= 0) && <div>{item}</div> || <div>0</div>}
                        </div>
                        <button onClick={()=> {
                            props.parentHandleAdd(data.price)
                            setItem(item + 1)
                            setAvailableItems(availableItems - 1)
                        }}>
                            <img src={require('../../assets/images/white-addBtn.png')} alt="" className='add__count-btn'/>
                        </button>
                    </div>
                    <button className="add__basket" onClick={handleClick}>
                        <img src={require('../../assets/images/add-to-basket.png')} alt="" className='add__basket'/>
                    </button>

                </div>
            </div>
        </div>

    )
}

export default FoodPage