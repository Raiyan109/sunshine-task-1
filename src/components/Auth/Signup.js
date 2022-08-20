import React from 'react';
import styles from './Signup.module.css'
const Signup = () => {
    return (
        <div className={styles.container}>
            <h1>Sign up and start learning</h1>

            <form>
                <div className={styles.field}>
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Your name"
                        class="input input-bordered w-full max-w-xs"
                    // {...register("name", {
                    //     required: {
                    //         value: true,
                    //         message: 'Name is Required'
                    //     }
                    // })}
                    />
                    <label class="label">
                        {/* {errors.name?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.name.message}</span>} */}

                    </label>
                </div>
            </form>
        </div>
    );
};

export default Signup;