import React from 'react'
import { useState } from 'react'; 

const CreateBlog = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className='w-screen h-screen bg-purple-100  items-center  text-cneter flex space-x-10  pr-1 pt-1 pb-1 pl-1 flex leading-7 bg-[url("/images/top.jpg")] font-bold  text-[18px]'>
      <div className='m-auto  leadings-2' >
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input className='w-full h-full'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
     
      </label>
      <h1>
   
              <label>Enter your email:
      <input className='w-full h-full'
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
         <label>Enter your age:
        <input className='w-full h-full'
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />

     
      </label>


        </label></h1>
        <div className='text-center '>
        <input className='border-2 bg-red-100 m-auto h-full w-100%  p-2' type="submit"></input>
        </div>
    </form>
    </div>
    </div>
  )
}

export default CreateBlog
/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
