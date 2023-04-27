import car from "./Logo/car.svg";
import edit from "./Logo/edit.svg";
import add from "./Logo/add.svg";


const AddActivity =()=>{
    return(


<div className=' my-2   h-16 w-screen bg-yellow-8 pt-2  border-y-[1px]'>
<div className=" w-46 h-12 bg-red-20   left-0 top-1 mx-2 ">


<div className='flex h-10 w-auto bg-green-80 top-2  text-[11px] text-center '>
  <div className='w-11 h-10 bg-gray-300 p-3 rounded  '>
    <img src={add}/>
    </div>
    <div className=' w-24 h-9 text-left bg-orange-40 mx-2 '>
      
      



      <div className='text-black text-[16px] w-screen font-sans pt-2'>
      Add Activity
      </div>
      </div>
      </div>
      </div>











</div>

    );
}

export default AddActivity;