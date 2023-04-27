import React from 'react'
import { useState } from 'react';

export default function Register() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (

        <div>

            <section class="bg-white dark:bg-gray-900">
                <div className=" bg-gradient-to-r from-cyan-400 to-purple-500  bg-cover bg center  rounded-lg w-[100%]  h-full relative m-2  "  >

                    <div class="flex   flex-col items-center justify-center px-6 py-8 mx-auto m-8 sm:h-screen lg:py-0 ">

                        <div class="w-full m-3 bg-white rounded-lg shadow dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 m- 5">
                            <div class="p-5 m-0  space-y-4 sd:space-y-6 sm:p-8 ">
                                <h1 class="text-[30px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                    Register
                                </h1>
                                <form onSubmit={handleSubmit}>

                                    <div className='font-bold leading-6 '>
                                        <label className=' w-full h-full'>UserName:
                                            <input className='w-full h-[30px] rounded border-1 bg-gray-100 text-[12px] font-mono weight-normal
	 ' 
                                                type="text"
                                                font="10px"
                                                name="username"
                                                value={inputs.username || ""}
                                                onChange={handleChange}
                                            />

                                        </label>


                                        <label>Password:
                                            <input className='w-full h-full h-[30px] rounded border-1 bg-gray-100'
                                                type="password"
                                                name="password"
                                                id='password'
                                                value={inputs.password || ""}
                                                onChange={handleChange}
                                            />

                                        </label>
                                    

                                        <label>ReEnter-Password:
                                            <input className='w-full h-full h-[30px] rounded border-1 bg-gray-100'
                                                type="password"
                                                name="repassword"
                                                id='confrm_password'
                                                value={inputs.repassword || ""}
                                                onChange={handleChange}
                                             
                                            />

                                        </label>

                                        <label>Enter your email:
                                            <input className='w-full h-full h-[30px] rounded border-1 bg-gray-100'
                                                type="email"
                                                name="email"
                                                value={inputs.email || ""}
                                                onChange={handleChange}
                                            />

                                        </label>

                                        <label>Phone number:
                                            <input className='w-full h-full h-[30px] rounded border-1 bg-gray-100'
                                                type="tel"
                                                name="phone"
                                                id='phone'
                                                value={inputs.phone || ""}
                                                onChange={handleChange}
                                            />

                                        </label>



                                      </div>


                                   
                                   
                                    

                                    



                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">

                                            <div class="ml-3 text-sm">



                                            </div>
                                        </div>

                                    </div>
                                    <div className='text-center my-2 '>
                                        <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-2' type="submit"  ></input>
                                    </div>


                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
