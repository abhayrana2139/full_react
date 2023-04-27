import React from 'react'
import { useState } from 'react';

export default function Login() {

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
                                    Login
                                </h1>
                                <form onSubmit={handleSubmit}>

                                    <div className='font-bold '>
                                        <label>UserName:
                                            <input className='w-full h-full border-1 bg-gray-100 ' 
                                                type="text"
                                                name="username"
                                                value={inputs.username || ""}
                                                onChange={handleChange}
                                            />

                                        </label>


                                        <label>Password:
                                            <input className='w-full h-full border-1 bg-gray-100'
                                                type="password"
                                                name="password"
                                                id='password'
                                                value={inputs.password || ""}
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
                                        <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit"  ></input>
                                    </div>


                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
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





{/*import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
    
    </div>
  );
}*/}