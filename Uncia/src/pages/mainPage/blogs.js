import React from 'react'
import facebook from "./Logo/facebook.svg";
import twitter1 from "./Logo/twitter1.svg";
import search1 from "./Logo/search1.svg";
import instagram from "./Logo/instagram.svg";
import Login1 from './login';

const blogs = () => {
  return (
    <div className="bg-[url('/images/blogsbg.jpg')] bg-cover  w-screen-md h-full">


      <div className='h-9 w-screen-sd bg-white justify-between relative flex space-x-4  '>

        <div className='flex bg-gray-7 h-8 '>
          <img src={facebook} />
          <img src={twitter1} />
          <img src={instagram} />


        </div>
        <div className='h-auto w-auto space-x-4 text-black bottom-0 text-[16px] mx-[-30px] pt-[3px] '>

          <button className=' hover:select-all'>Blog</button>
          <button className=' hover:select-all'>Home</button>
         


        </div>
        <div className='bg-pink-60 h-20'>

          <div className='flex bg-gray-70 h-7 space-x-2 pr-0 relative   justify-center '>


            
            <button>Register</button>
            <div className='w-5 h-5 top-2 justify-center bg-red-5 pt-[6px]'><img src={search1} />
              </div>

            <div className='bg-red- relative top-8 right-10'>
             
            </div>

          </div>


        </div>


      </div>



      <Login1/>


      
      

    



    </div>
  )
}

export default blogs
