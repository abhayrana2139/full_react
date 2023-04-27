import car from "./Logo/car.svg";
import edit from "./Logo/edit.svg";
import hotel from "./Logo/hotel.svg"

const Hotel =()=>{
    return(


<div className=' my-2   h-16 w-[100%] bg-yellow-80  border-y-[1px] bg-red-4  pt-3 '>
<div className=" w-46 h-12 bg-red-20   left-0 top-1 mx-2 ">


<div className='flex h-10 w-56 bg-green-80 top-2  text-[11px] text-center'>
  <div className='w-11 h-10 bg-gray-300  rounded p-3 '>
    <img src={hotel}/>
    </div>
    <div className=' w-24 h-9 text-left bg-orange-40 mx-2 font-sans'>
      
      <div className='text-gray-400 text-[13px]  w-scree font-bold'>

      Hotel
      </div>



      <div className='text-black text-[16px] w-screen'>
      Hotel Himalayan Oak
      </div>
      </div>
      </div>
      </div>









<div className=' w-24 h-9 bg-red-7   rounded pl-16  mx-5 float-right my-[-50px]'>
  <div className=' w-12 pl-0 pt-0'>
  <img src={edit}/>
  <div className='text-gray-400 text-[11px] font-serif mx-[-10px]'>
  Change 
  </div>


  </div>
    </div>







  

  







</div>

    );
}

export default Hotel;