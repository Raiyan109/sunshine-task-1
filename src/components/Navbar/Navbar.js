import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.generalRoute}>
                <Link className={styles.link} to='/home'>Home</Link>
                <Link className={styles.link} to='/about'>About Us</Link>
                <Link className={styles.link} to='/courses'>Courses</Link>
                <Link className={styles.link} to='/Contact'>Contact</Link>
            </div>

            <div className={styles.authRoute}>
                <Link to='login'>Log in</Link>
                <Link to='signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default Navbar;