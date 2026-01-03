import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseSignup from '../../Hooks/UseSignup.js'


const Signup = () => {
    const [input, setinput] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const { loading, signup } = UseSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(input)
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        <span className='text-blue-500'>Whats Chat </span><hr /><br />
                        Register Yourself</h1>


                    <form className='m-4' onSubmit={handleSubmit}>

                        {/* input for Name */}
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text font-bold text-black'>Full Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input
                                    type="text"
                                    className="grow"
                                    value={input.fullname}
                                    onChange={(e) => setinput({ ...input, fullname: e.target.value })}
                                    placeholder="Enter Fullname"
                                    autoComplete='off' />
                            </label>
                        </div>

                        {/* input for Username */}
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text font-bold text-black'>Username</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Enter username"
                                    value={input.username}
                                    onChange={(e) => setinput({ ...input, username: e.target.value })}
                                    autoComplete='off' />
                            </label>
                        </div>

                        {/* input for password */}
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text font-bold text-black'>Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input
                                    type="password"
                                    className="grow"
                                    placeholder="Enter Password"
                                    value={input.password}
                                    onChange={(e) => setinput({ ...input, password: e.target.value })}
                                    autoComplete='off' />
                            </label>
                            <span className='text-yellow-500'>Enter atleast 8 characters</span>
                        </div>

                        {/* input for Confirm password */}
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text font-bold text-black'>Confirm Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input
                                    type="password"
                                    className="grow"
                                    value={input.confirmPassword}
                                    onChange={(e) => setinput({ ...input, confirmPassword: e.target.value })}
                                    placeholder="Confirm Password"
                                    autoComplete='off' />
                            </label>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text font-bold'>Gender</span>
                            </label>

                            {/* Gender Checkbox */}
                            <div>
                                <div className="form-control">
                                    <label className="label cursor-pointer justify-normal">
                                        <input
                                            type="radio"
                                            name="Gender"
                                            value="Female"
                                            className="radio checked:bg-red-800 border border-red-400"
                                            onChange={(e) => setinput({ ...input, gender: e.target.value })}
                                        />
                                        <span className="label-text mx-5 text-red-500">Female</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer justify-normal">
                                        <input
                                            type="radio"
                                            name="Gender"
                                            value="Male"
                                            className="radio checked:bg-blue-800 border border-blue-400"
                                            onChange={(e) => setinput({ ...input, gender: e.target.value })}
                                        />
                                        <span className="label-text mx-5 text-blue-500">Male</span>
                                    </label>
                                </div>
                            </div>


                        </div>
                        <Link to={'/login'} className='text-sm hover-underline hover:text-blue-600 mt-2 inline-block'>
                            Already Registered?
                        </Link>
                        <div>
                            <button
                                className='btn btn-block btn-success btn-sm mt-2 border-slate-900'
                                disabled={loading}>
                                {loading ? <span className='loading loading-spinner'></span> : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

{
    //     import React from 'react'
    // import GenderCheckbox from './GenderCheckbox'

    // const Signup = () => {
    //     return (
    //         <div>
    //             <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    //                 <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    //                     <h1 className='text-3xl font-semibold text-center text-gray-300'>
    //                         <span className='text-blue-500'>Whats Chat </span><hr /><br />
    //                         Register Yourself</h1>


    //                     <form className='m-7'>

    //                         {/* input for Name */}
    //                         <div>
    //                             <label className='label p-2'>
    //                                 <span className='text-base label-text'>Full Name</span>
    //                             </label>
    //                             <label className="input input-bordered flex items-center gap-2">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    //                                 <input
    //                                     type="text"
    //                                     className="grow"
    //                                     placeholder="Enter Fullname"
    //                                     autoComplete='off' />
    //                             </label>
    //                         </div>

    //                         {/* input for Username */}
    //                         <div>
    //                             <label className='label p-2'>
    //                                 <span className='text-base label-text'>Username</span>
    //                             </label>
    //                             <label className="input input-bordered flex items-center gap-2">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    //                                 <input
    //                                     type="text"
    //                                     className="grow"
    //                                     placeholder="Enter username"
    //                                     autoComplete='off' />
    //                             </label>
    //                         </div>

    //                         {/* input for password */}
    //                         <div>
    //                             <label className='label p-2'>
    //                                 <span className='text-base label-text'>Password</span>
    //                             </label>
    //                             <label className="input input-bordered flex items-center gap-2">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
    //                                 <input
    //                                     type="password"
    //                                     className="grow"
    //                                     placeholder="Enter Password"
    //                                     autoComplete='off' />
    //                             </label>
    //                         </div>

    //                         {/* input for Confirm password */}
    //                         <div>
    //                             <label className='label p-2'>
    //                                 <span className='text-base label-text'>Confirm Password</span>
    //                             </label>
    //                             <label className="input input-bordered flex items-center gap-2">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
    //                                 <input
    //                                     type="password"
    //                                     className="grow"
    //                                     placeholder="Confirm Password"
    //                                     autoComplete='off' />
    //                             </label>
    //                         </div>

    //                         <div>
    //                             <label className='label p-2'>
    //                                 <span className='text-base label-text'>Gender</span>
    //                             </label>

    //                             {/* Gender Checkbox */}
    //                             <GenderCheckbox />

    //                         </div>
    //                         <a href='#' className='text-sm hover-underline hover:text-blue-600 mt-2 inline-block'>
    //                             Already Registered?
    //                         </a>
    //                         <div>
    //                             <button className='btn btn-block btn-success btn-sm mt-2'>Register</button>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // export default Signup
}