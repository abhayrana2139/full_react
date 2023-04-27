import React from 'react'
import add from "../../Logo/add.svg"


const Write = () => {
  return (
    <div>
      <div className="bg-[url('/images/write1.jpg')] h-60 w-full bg-cover m-2">

    
        </div>

        <div className='m-2 flex space-x-2 font-semibold text-[20px] pt-1 h-9 items-center justify-between '>
        <div className='flex space-x-3'>
        <img src={add}/>
        <h1> This is my Story </h1>
        </div>
        
        <div className='bg-green-900 text-white text-[20px] font-normal rounded'>
          <button>Publish</button>
        </div>



        </div>

        <div>
       
<input type="text" name="description" placeholder='Tell your story...' class="bg-gray-50 border border-gray-300 align-text-top text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20" required="" >
                  </input>
</div>
   
      
      </div>
  )
}

export default Write
