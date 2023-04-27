import './App.css';
import add from "./Logo/add.svg"
const Faq2=()=>{
    return(

<div className=' w-[100%]  h-8 bg-orange-6 flex space-x-20  justify-between'>
   

   <div className=' top-0 left-0 w-34  bg-red-4 '>    
   <div className='font-bold text-[15px] m-2'>
   Where is Kasol?
   </div>
   </div>
   
   <div className=' right-0 w-100%  bg-red-40 top-2 pl-24 pt-1 '>    
   <img src={add}/>
   </div>
   </div>



    );
}

export default Faq2;