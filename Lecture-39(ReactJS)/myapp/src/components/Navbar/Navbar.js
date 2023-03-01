import React from 'react'
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <Link to="/home">Home</Link>
            {/* <Link className={styles['nav-item']} to="/food">Food</Link> */}
            {/* <Link className={styles['nav-item']} to="/cart">Cart</Link> */} */}
        </nav>
    )
}

export default Navbar
