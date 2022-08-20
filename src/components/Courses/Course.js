import React from 'react';
import styles from './Course.module.css'
const Course = ({ course }) => {

    const { name, img, price, instructor } = course
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>{instructor}</h3>
            <h2>{price}</h2>
        </div>
    );
};

export default Course;