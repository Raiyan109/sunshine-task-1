import React from 'react';
import styles from './NewsLetter.module.css'


const NewsLetter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <h1>Subscribe to Our News Letter</h1>
                <p>Subscribe to our newsletter to get interesting info about our courses.</p>
                <input type="email" name="" id="" placeholder='Enter Your Email Adderss' />
                <input type="submit" value="Subscibe" />
            </div>

        </div>
    );
};

export default NewsLetter;