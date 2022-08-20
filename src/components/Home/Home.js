import React from 'react';
import styles from './Home.module.css'
import bannerImg from '../../assets/images/banner.jpg'

const Home = () => {
    return (
        <div className={styles.container}>

            <div className={styles.bannerText}>
                <h1>New to Edu-Care?</h1>
                <h2>Lucky you.</h2>
                <h4>Courses start at $13.99. Get your new student offer before it expires.</h4>
            </div>
            <div className={styles.bannerImg}>
                <img src={bannerImg} alt="" />

            </div>

        </div>
    );
};

export default Home;