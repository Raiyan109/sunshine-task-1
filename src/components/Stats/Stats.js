import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, fa1, fa2, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './Stats.module.css'


const Stats = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stat1}>
                <FontAwesomeIcon icon={fa1} className={styles.fa} />
                <FontAwesomeIcon icon={fa0} className={styles.fa} />
                <FontAwesomeIcon icon={fa0} className={styles.fa} />
                <FontAwesomeIcon icon={faPlus} className={styles.fa} />
                <br />
                <h1>Students</h1>
            </div>
            <div className={styles.stat2}>
                <FontAwesomeIcon icon={fa2} className={styles.fa} />
                <FontAwesomeIcon icon={fa0} className={styles.fa} />

                <FontAwesomeIcon icon={faPlus} className={styles.fa} />
                <br />
                <h1>Courses</h1>
            </div>
            <div className={styles.stat3}>
                <FontAwesomeIcon icon={fa1} className={styles.fa} />
                <FontAwesomeIcon icon={fa0} className={styles.fa} />

                <FontAwesomeIcon icon={faPlus} className={styles.fa} />
                <br />
                <h1>Mentors</h1>
            </div>
        </div>
    );
};

export default Stats;