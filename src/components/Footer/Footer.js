import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerMain}>
                <h1>Edu-care</h1>
                <h3>Edu-care is an online learning platform that has been operating since 2022 from now.</h3>
                <div className={styles.socialIcons}>
                    <FontAwesomeIcon icon={faFacebook} className={styles.fa} />
                    <FontAwesomeIcon icon={faGithub} className={styles.fa} />
                    <FontAwesomeIcon icon={faGoogle} className={styles.fa} />
                </div>
            </div>
            <div className={styles.courses}>
                <h1>Courses</h1>
                <h3>Javascript Course</h3>
                <h3>Node JS Course</h3>
                <h3>React Course</h3>
                <h3>HTML Course</h3>
            </div>
            <div className={styles.menu}>
                <h1>Menu</h1>
                <h3>Home</h3>
                <h3>Courses</h3>
                <h3>Mentor</h3>
            </div>
            <div className={styles.about}>
                <h1>About</h1>
                <h3>Contact us</h3>
                <h3>Terms and conditions</h3>
                <h3>FAQ</h3>
            </div>

        </div>
    );
};

export default Footer;