import React, { Fragment } from 'react'
import styles from '../Navbar/Navbar.module.css'
import Cart from '../Cart/Cart';
import FoodDetails from '../FoodDetails/FoodDetails';
import Home from '../Home/Home';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
const Foodapp = () => {
    return (
        <BrowserRouter>
            <nav className={styles['navbar']}>
                <Link className={styles['nav-item']} to="home">Home</Link>
                <Link className={styles['nav-item']} to="food">Food</Link>
                <Link className={styles['nav-item']} to="cart">Cart</Link>
            </nav>

            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="food" element={<FoodDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Foodapp
