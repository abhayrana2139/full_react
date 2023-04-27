import React from 'react'
import edit from "../../Logo/edit.svg"
import close from "../../Logo/close.svg"
const Update = () => {
  return (
    <div className='relative  '>

    
      <div className=' relative text-blue-600 w-auto justify-between flex'>
        
        <div className=' relative text-[20px] font-bold text-gray-600'>
        Blogs
        
        
        </div>
        <div>
        <ul className='toplist flex space-x-6 '>
        <li className='bg-blue-800 text-white '><button>Home</button></li>
        <li className=''>Add</li>
        <li className=''>LogOut</li>
        </ul>

        </div>
      </div>

<div className='my-10 m-4 flex space-x-6 w-[700px] items-center   relative'>
    <div className='w-[1000px] mx-0 '>
    <table className="table-auto w-[50%] ">
  <thead>
    <tr className='text-center'>
      <th>#</th>
      <th>Title</th>
      <th>Subject</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>

      </thead>
      
  <tbody>
    <tr className='text-center'>
      <td>1</td>
      <td> Traveling</td>
      <td>Trekking</td>
      <td className='text-center item-center pl-8'><img src={edit}/></td>
      <td className='text-center item-center pl-8'>  <img src={close}/> </td>
    </tr>
    <tr className='text-center'>
      <td>2</td>
      <td>Traveling</td>
      <td>Trekking</td>
      <td className='text-center item-center pl-8'><img src={edit}/></td>
      <td className='text-center item-center pl-8'>  <img  src={close}/> </td>
    </tr>
    <tr className='text-center'>
      <td>3</td>
      <td>Traveling</td>
      <td>Trekking</td>
      <td className='text-center item-center pl-8'><img src={edit}/></td>
      <td className='text-center item-center pl-8'>  <img src={close}/> </td>
    </tr>
   
  </tbody>
</table>
    </div>
    
    





    
   
  
    

    


</div>

    </div>
  )
}

export default Update
