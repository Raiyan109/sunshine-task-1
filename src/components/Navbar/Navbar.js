import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import styles from './Navbar.module.css'
const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    }
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.generalRoute}>
                <Link className={styles.link} to='/home'>Home</Link>
                <Link className={styles.link} to='/about'>About Us</Link>
                <Link className={styles.link} to='/courses'>Courses</Link>
                {/* {
                    user && <Link className={styles.link} to='/courses'>Courses</Link>
                } */}

                <Link className={styles.link} to='/Contact'>Contact</Link>
            </div>

            <div className={styles.authRoute}>
                {/* <Link to='login'>Log in</Link> */}
                <Link to='signup'>Sign up</Link>
                {
                    user ?
                        <button className={styles.signOutButton} onClick={logout}>Sign out</button>
                        :
                        <Link to='login'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;