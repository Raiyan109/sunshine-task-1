import React, { useEffect, useState } from 'react';
import Course from './Course';
import styles from './Courses.module.css'
const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // const courses = [
    //     {
    //         id: 1,
    //         "name": "React Course",
    //         "img": "../../assets/images/course-1.png",
    //         "instructor": "Raiyan Kabir",
    //         "price": "14.34",
    //     },
    //     {
    //         id: 2,
    //         "name": "HTML CSS Course",
    //         "img": "../../assets/images/course-2.png",
    //         "instructor": "Raiyan Kabir",
    //         "price": "14.34",
    //     },
    //     {
    //         id: 3,
    //         "name": "Javascript Course",
    //         "img": "../../assets/images/course-3.png",
    //         "instructor": "Raiyan Kabir",
    //         "price": "14.34",
    //     },
    //     {
    //         id: 4,
    //         "name": "Node JS Course",
    //         "img": "../../assets/images/course-3.png",
    //         "instructor": "Raiyan Kabir",
    //         "price": "14.34",
    //     },

    // ]
    return (
        <div className={styles.container}>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                />)
            }
        </div>
    );
};

export default Courses;