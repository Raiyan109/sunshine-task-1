import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import styles from './Signup.module.css'
import Loading from '../Loading/Loading';



const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [users] = useState(user || gUser)

    const navigate = useNavigate()

    let signInError

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (users) {
        navigate('/courses')
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done');

    };

    return (
        <div className={styles.container}>
            <h1>Sign up and start learning</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Your name"

                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span >{errors.name.message}</span>}

                    </label>
                </div>

                <div>
                    <label>
                        <span>Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500 ">{errors.email.message}</span>}
                    </label>
                </div>
                <div >
                    <label class="label">
                        <span class="label-text">Password</span>

                    </label>
                    <input
                        type="password"
                        placeholder="Your password"
                        class="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 charachters or longer'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500 ">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500 ">{errors.password.message}</span>}
                    </label>
                </div>

                {signInError}

                <input className='' value='Sign up' type="submit" />
            </form>

            <p><small>Already have an Account? <Link className='text-primary' to='/login'>PLease Login</Link></small></p>

            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
            >Continue with google</button>
        </div>
    );
};

export default Signup;