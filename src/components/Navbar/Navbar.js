import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link className={styles.link} to='/about'>About Us</Link>
            <Link className={styles.link} to='/courses'>Courses</Link>
            <Link className={styles.link} to='/Contact'>Contact</Link>
        </div>
    );
};

export default Navbar;