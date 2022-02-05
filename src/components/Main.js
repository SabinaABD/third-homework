import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import "../assets/styles/main.css"
import {useState} from "react";
import FoodPage from "./foodPages/FoodPage";


const Main = () => {

    const [basket, setBasket] = useState(0)
    const [sum, setSum] = useState(0)

    const parentHandleAdd = (price) => {
        setBasket(basket + 1)
        setSum( sum + price)
    }

    const parentHandleDelete = (price) => {
        setBasket(basket - 1)
        setSum(sum - price)
    };


    const foodState = [
        {id:1, img:'pizza.png', name:'Pizza', price:10},
        {id:2, img:'fruits.png', name:'Fruits', price:12},
        {id:3, img:'nachos.png', name:'Snacks', price:5},
        {id:4, img:'salad.png', name:'Veggies', price:15},
        {id:5, img:'hotdog.png', name:'Hotdog', price:12},
        {id:6, img:'burger.png', name:'Burger', price:12},
        {id:7, img:'soda.png', name:'Drink', price:5},
    ]

    const foodPages = foodState.map(elem => <Route path={`/${elem.id}`} element = {<FoodPage key={elem.id}
                                                                                               id={elem.id}
                                                                                               name={elem.name}
                                                                                               img={elem.img}
                                                                                               price={elem.price}
                                                                                             parentHandleAdd={parentHandleAdd}
                                                                                             parentHandleDelete={parentHandleDelete}/>}/>)

    return(
        <Routes>
            <Route path='/' element={<Content basket={basket} sum={sum}/>}>
                <Route path='/' element={<Home />}/>
                {foodPages}
                <Route path='about' element ={<About />}/>
               {/* <Route path='foods' element={<Home />}>
                    <Route path=":foodId" element={<Pizza img = {'pizza.png'} name={'Pizza'} id={1}/>}/>
                </Route>*/}
            </Route>
        </Routes>
    )
}

const Content = (props) => {
    return(
        <div className='App'>
            <div className="wrapper">
                <div className=" header">
                    <Header basket={props.basket} sum={props.sum}/>
                </div>
                <div className="box sidebar">
                    <Sidebar />
                </div>
                <div className=" content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}


export default Main